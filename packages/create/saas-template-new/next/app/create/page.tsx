import Navbar from '@/components/navbar';
import VideoForm from './form';

export default function New() {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto mt-8">
        <VideoForm />
      </div>
    </>
  );
}
