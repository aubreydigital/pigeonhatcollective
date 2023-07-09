import Link from "next/link";

interface FormProps {
  type: string;
  event: {
    artists: string[];
    venue: string;
    address: string;
    cost: number;
    dayof: number;
    date: string;
    image: string;
    title: string;
    over21: boolean;
    tickets: string;
    tags: string[];
  };
  setEvent: (event: { artists: string[]; venue: string; address: string; cost: number; dayof: number; date: string; image: string; title: string; over21: boolean; tickets: string; tags: string[] }) => void;
  submitting: boolean;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<FormProps> = ({ type, event, setEvent, submitting, handleSubmit }) => {
  return (
    <section className='w-full mt-5 text-center text-white flex-start flex-col'>
      <h1 className='head_text'>
        <span className='font-semibold'>{type} Event</span>
      </h1>
      <p className='desc text-center mx-20 mt-5'>
        {type} your event page and don't forget to share with the world 😉
      </p>

      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-300'>
            Title:{" "}
          </span>
          <input
            value={event.title}
            type="text"
            onChange={(e) => {
              setEvent({ ...event, title: e.target.value })}}
            placeholder='Event Title?'
            required
            className='px-5 py-2 text-xs text-black'
          />
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-300'>
            Artists:{" "}
          </span>
          <textarea
            value={event.artists}
            onChange={(e) => {
              const inputArtists = e.target.value.trim().split(',');
              setEvent({ ...event, artists: inputArtists })}}
            placeholder='Seperate by comma (ex. Kurian, Mariposa)'
            required
            className='px-5 py-2 text-xs text-black'
          />
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-300'>
            Venue:{" "}
          </span>
          <input
            value={event.venue}
            type="text"
            onChange={(e) => {
              setEvent({ ...event, venue: e.target.value })}}
            placeholder='Name of Venue?'
            className='px-5 py-2 text-xs text-black'
          />
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-300'>
            Address:{" "}
          </span>
          <input
            value={event.address}
            type="text"
            onChange={(e) => {
              setEvent({ ...event, address: e.target.value })}}
            placeholder='Address of Venue'
            required
            className='px-5 py-2 text-xs text-black'
          />
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-300'>
            Over 21:{" "}
          </span>
          <input
            type="checkbox"
            checked={event.over21}
            onChange={(e) => {
              setEvent({ ...event, over21: e.target.checked })}}
            className='px-5 py-2 text-xs text-black'
          />
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-300'>
            Date:{" "}
          </span>
          <input
            value={event.date}
            type="text"
            onChange={(e) => {
              setEvent({ ...event, date: e.target.value })}}
            placeholder='Event Date'
            required
            className='px-5 py-2 text-xs text-black'
          />
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-300'>
            Pre-sale Cost?:{" "}
          </span>
          <input
            value={event.cost}
            type="text"
            onChange={(e) => {
              setEvent({ ...event, cost: Number(e.target.value) })}}
            className='px-5 py-2 text-xs text-black'
          />
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-300'>
            Day of Cost:{" "}
          </span>
          <input
            value={event.dayof}
            type="text"
            onChange={(e) => {
              setEvent({ ...event, dayof: Number(e.target.value) })}}
            required
            className='px-5 py-2 text-xs text-black'
          />
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-300'>
            Ticket URL:{" "}
          </span>
          <input
            value={event.tickets}
            type="text"
            onChange={(e) => {
              setEvent({ ...event, tickets: e.target.value })}}
            placeholder='Event Ticket URL?'
            className='px-5 py-2 text-xs text-black'
          />
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-300'>
            Tags:{" "}
          </span>
          <textarea
            value={event.tags}
            onChange={(e) => {
              const inputTags = e.target.value.trim().split(',');
              setEvent({ ...event, tags: inputTags })}}
            placeholder='Seperate by comma (ex. indie,garage rock)'
            required
            className='px-5 py-2 text-xs text-black'
          />
        </label>
        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link className='text-gray-500 text-sm' href='/'>Cancel
          </Link>

          <button
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
          >
            {submitting ? `Creating...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
