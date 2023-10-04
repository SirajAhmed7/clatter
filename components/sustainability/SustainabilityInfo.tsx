import InfoFullWidth from "../ui/InfoFullWidth";

function SustainabilityInfo() {
  return (
    <section className="mb-64">
      <div className="space-y-20 md:space-y-48">
        <InfoFullWidth
          heading="Sustainable Materials"
          body="We carefully select materials that have a minimal impact on the environment. From organic cotton and recycled polyester to natural rubber and plant-based alternatives, we prioritize the use of sustainable materials throughout our product range. By choosing these materials, we reduce the reliance on non-renewable resources and promote a more circular and eco-friendly approach to fashion."
          img="/sustainabilityInfo1.webp"
          showPattern
        />
        <InfoFullWidth
          heading="Ethical Production"
          body="We believe that ethical production practices are crucial for a sustainable fashion industry. Our footwear is crafted in factories that adhere to fair labor standards, providing safe and healthy working conditions for the skilled artisans who bring our designs to life. We have established long-term partnerships with our suppliers, ensuring that they share our commitment to fair wages, safe working environments, and the well-being of their employees."
          img="/sustainabilityInfo2.webp"
          isImgLeft
        />
      </div>
    </section>
  );
}

export default SustainabilityInfo;
