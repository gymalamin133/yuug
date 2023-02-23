import { Carousel } from 'react-carousel-minimal';

function Testimonial() {
 const data = [
    {
      image: "https://www.enchantingmarketing.com/wp-content/uploads/2021/11/testimonial-example-1.jpg",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQun2BcFk7QeRE8-lQ5p8j6V6uyzZD8R-rRneYeTs5-78LyLQQIn9iYPHHg6sBI05GJWG0&usqp=CAU",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCDro6BzXUO65YeIcP_WSU8cDYE55s9149bvwXlDagt5Z9r3exQQZw0Y4WrxU5TGbp7nE&usqp=CAU",
    },
  ];

  return (
    <div className="Testimonial mt-20">
        <div className="flex justify-center">
        <h1 className='md:text-5xl text-3xl font-semibold mb-2 border-b-2 border-[#F2C] w-fit pb-2'>Testimonial</h1>
        </div>
          <div className="justify-center flex">
          <Carousel
            data={data}
            time={2000}
            width="450px"
            height="250px"
            radius="10px"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideImageFit="cover"
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
              
            }}
          />
          </div>
        </div>
  );
}

export default Testimonial;