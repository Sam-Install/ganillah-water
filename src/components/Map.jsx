import React from 'react';

const Map = () => {
  return (
    <div className="my-10 w-full h-80 sm:h-96 md:h-[500px] px-4">
      <iframe
        title="Nairobi Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.19439423691!2d36.792338!3d-1.286389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10e97a6a0d3f%3A0x5082df5d6224990!2sNairobi!5e0!3m2!1sen!2ske!4v1702361234567!5m2!1sen!2ske"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        className="rounded-lg shadow-lg"
      ></iframe>
    </div>
  );
};

export default Map;
