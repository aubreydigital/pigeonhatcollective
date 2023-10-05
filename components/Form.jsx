'use client';
import Link from "next/link";
import { useState } from 'react';
import UploadImage from './UploadImage'

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  const [imageFile, setImageFile] = useState(null);

  
  const handleImageUpload = (imageUrl) => {
    let currentDateEastern = new Date();
    let currentDate = new Date(currentDateEastern.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }));
let year = currentDate.getFullYear();
let month = String(currentDate.getMonth() + 1).padStart(2, '0');
let day = String(currentDate.getDate()).padStart(2, '0');

let newDate = year + month + day;
console.log(newDate);  // Output: 20230709
let fileName =  newDate + imageFile.name
console.log(fileName)
    // Handle the uploaded image URL (e.g., store it in state)
  setPost({...post, image: fileName})
  };

  return (
    <section className='w-full mt-5 text-center text-white flex-start flex-col'>
      <h1 className='head_text'>
        <span className='font-semibold'>{type} Event</span>
      </h1>
      <p className='desc text-center mx-20 mt-5'>
        {type} your event page and don&apos;t forget to share with the world 😉
      </p>
      <span className='font-satoshi font-semibold text-base text-gray-300'>
    Flyer Image:{" "}
  </span>
      <UploadImage onImageUpload={handleImageUpload} setImageFile={setImageFile}/>
<p className="mt-2 text-xs text-center text-semibold text-pink-300">*Don&apos;t forget to upload your image.</p>
<p className="text-center text-xs text-blue-400">You will see an alert once your upload is complete.</p>

      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full flex flex-col gap-7 glassmorphism'
      >
        {/* <form
        // onSubmit={uploadImage}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >
  <span className='font-satoshi font-semibold text-base text-gray-300'>
    Flyer Image:{" "}
  </span>
  <input
    type='file'
    accept='image/*'
    onChange={(e)=> handleImageUpload(e.target.files[0])}
    className='hidden' // Hide the default file input
    id='file-input' // Add an ID to associate with the label
  />
  <label htmlFor='file-input' className='px-5 py-2 text-xs text-black border border-gray-300 rounded cursor-pointer bg-white'>
    Choose File
  </label>
</form> */}

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-300'>
            Title:{" "}
          </span>
          <input
            value={post.title}
            type="text"
            onChange={(e) => {
              setPost({ ...post, title: e.target.value })}}
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
            value={post.artists}
            onChange={(e) => {
              setPost({ ...post, artists: e.target.value })}}
            placeholder='Seperate by comma (ex. Kurian, Mariposa)'
            required
            className='px-5 py-2 text-xs text-black'
          />
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-300'>
            Visual Artists:{" "}
          </span>
          <textarea
            value={post.visual}
            onChange={(e) => {
              setPost({ ...post, visual: e.target.value })}}
            placeholder='Seperate by comma (ex. Picasso, Van Gogh)'
            className='px-5 py-2 text-xs text-black'
          />
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-300'>
            Vendors:{" "}
          </span>
          <textarea
            value={post.vendors}
            onChange={(e) => {
              setPost({ ...post, vendors: e.target.value })}}
            placeholder='Seperate by comma (ex. Spacegoat Productions, Happy Earth Market)'
            className='px-5 py-2 text-xs text-black'
          />
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-300'>
            Venue:{" "}
          </span>
          <input
            value={post.venue}
            type="text"
            onChange={(e) => {
              setPost({ ...post, venue: e.target.value })}}
            placeholder='Name of Venue?'
            className='px-5 py-2 text-xs text-black'
          />
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-300'>
            Address:{" "}
          </span>
          <input
            value={post.address}
            type="text"
            onChange={(e) => {
              setPost({ ...post, address: e.target.value })}}
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
            checked={post.over21}
            onChange={(e) => {
              setPost({ ...post, over21: e.target.checked })}}
            className='px-5 py-2 text-xs text-black'
          />
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-300'>
            Date:{" "}
          </span>
          <input
            value={post.date}
            type="date"
            onChange={(e) => {
              setPost({ ...post, date: e.target.value })
            }}
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
            value={post.cost}
            type="text"
            onChange={(e) => {
              setPost({ ...post, cost: Number(e.target.value) })}}
            className='px-5 py-2 text-xs text-black'
          />
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-300'>
            Day of Cost:{" "}
          </span>
          <input
            value={post.dayof}
            type="text"
            onChange={(e) => {
              setPost({ ...post, dayof: Number(e.target.value) })}}
            required
            className='px-5 py-2 text-xs text-black'
          />
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-300'>
            Ticket URL:{" "}
          </span>
          <input
            value={post.tickets}
            type="text"
            onChange={(e) => {
              setPost({ ...post, tickets: e.target.value })}}
            placeholder='post Ticket URL?'
            className='px-5 py-2 text-xs text-black'
          />
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-300'>
            Tags:{" "}
          </span>
          <textarea
            value={post.tags}
            onChange={(e) => {
              // const inputTags = e.target.value.trim().split(',');
              setPost({ ...post, tags: e.target.value })
              }}
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