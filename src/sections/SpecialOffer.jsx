import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:felx-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          <span className="text-coral-red">Special </span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Experience unbeatable savings with our limited-time offer: Get 30% off
          on select styles! Elevate your footwear collection without breaking
          the bank. Whether you're looking for the perfect running companion or
          a stylish everyday essential, now is the time to shop. Don't miss out
          – seize this opportunity to step up your game while enjoying
          incredible discounts. Hurry and explore our range today to make the
          most of this exclusive offer. Your perfect pair awaits!
        </p>

        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop Now" iconURL={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            bordercolor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
