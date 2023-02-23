import image from "../../images/alamin.jpg"

function AboutMe() {
  return (
    <div>
        <div id="about" className="md:flex md:mt-36 p-3 mt-20 md:justify-between md:gap-10">
            <div className="flex-col items-start justify-between w-3/5">
            <div className="text-5xl border-b-2 border-[#F2C] pb-1 w-fit">
                About Me
            </div>
            <div className="mt-6 text-lg text-[#aaff] ">
                <p className="">This is al-amin, ready to work as trainee or junior 
                    frontend developer. I have strong knowledge of web
                     architecture and frontend latest technology as react with 
                     good skill of HTML,CSS, Javascript, React and Redux or some basic 
                     styling framework such as bootstrap, Semantic UI etc.I am 
                     a coding passionate person and fast learner.I am able to 
                     handle multiple tasks on a daily basis and I use a creative 
                     approach to solve problem .I am a dependable person who is 
                     great at time management with always energetic and eager to 
                     learn new skills.
                </p>
            </div>
            </div>
            <div className="flex mt-10 mb-10 md:mt-0 md:mb-0">
                <img className="rounded-2xl" src={image} alt="" />
            </div>
        </div>
    </div>
  )
}

export default AboutMe;