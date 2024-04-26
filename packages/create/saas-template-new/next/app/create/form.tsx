'use client';
import {globals} from '@/globals';
import {useRouter} from 'next/navigation';
import {FormEvent, useEffect, useState} from 'react';
import io, {Socket} from 'socket.io-client';
import {v4 as uuidv4} from 'uuid';

function SubmitButton({isProcessing}: {isProcessing: boolean}) {
  return (
    <button
      type={'submit'}
      disabled={isProcessing}
      className="rounded-md bg-gray-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {isProcessing ? (
        <>
          <span>Preparing your video...</span>
        </>
      ) : (
        <span>Generate Video</span>
      )}
    </button>
  );
}

export default function VideoForm() {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const newSocket = io(globals.websocketServerUrl);
    setSocket(newSocket);

    newSocket.on('taskCompleted', data => {
      setIsProcessing(false);
      router.push(`/edit/${data.jobId}`);
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsProcessing(true);
    const formData = new FormData(event.target as HTMLFormElement);
    const textInput = formData.get('topic');
    console.log('topic', textInput);
    const jobId = uuidv4();

    socket?.emit('startTask', {jobId, textInput});

    socket?.on('connect_error', err => {
      setIsProcessing(false);
      console.log(`connect_error due to ${err.message}`);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-3xl font-semibold leading-7 text-gray-900">
            Create a new Video
          </h2>
          <div className="mt-10 gap-x-6 gap-y-8 ">
            <div className="col-span-full">
              <label
                htmlFor="topic"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Describe the topic of your video
              </label>
              <div className="mt-2">
                <textarea
                  id="topic"
                  name="topic"
                  placeholder="Three surprising facts about the Roman Empire"
                  rows={3}
                  className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-start">
        <SubmitButton isProcessing={isProcessing} />
      </div>
    </form>
  );
}
