type ButtonProps = {
  className?: string;
};

export default function GLOW({ className }:ButtonProps){
return(
  <div data-aos="fade-up"   className={` absolute   rounded-full ${className} `}></div>
)
}