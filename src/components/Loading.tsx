import { VscLoading } from 'react-icons/vsc';

export function Loading() {
  return (
    <button type='button' className='animate-spin-gradient text-6xl'>
      <VscLoading />
    </button>
  );
}
