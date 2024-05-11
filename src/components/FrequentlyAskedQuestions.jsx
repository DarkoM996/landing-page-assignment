import product from "../images/product.jpg";
import FrequentlyAskedQuestion from "./FrequentlyAskedQuestion";

const FrequentlyAskedQuestions = () => {
  return (
    <div className="max-w-screen-3xl mx-auto h-full px-6 py-4 md:py-8 lg:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
        <div className="w-full h-fit py-8">
          <img
            src={product}
            alt="/"
            className="w-full h-[600px] object-cover bg-center rounded-2xl"
          />
        </div>
        <div className="flex flex-col w-full h-full justify-center ">
          <h2 className="text-5xl font-bold pb-8">
            Frequently{" "}
            <span className="italic font-bodoni font-medium">Asked</span>{" "}
            Questions
          </h2>
          <FrequentlyAskedQuestion />
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
