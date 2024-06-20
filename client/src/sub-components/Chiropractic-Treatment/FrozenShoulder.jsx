import React from "react";
import FrozenShoulderImage from "../../assets/Chiropractic-Treatment/Frozen-Shoulder.jpg";

const FrozenShoulder = () => {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 text-black">
        <div className="flex flex-col mb-10 pb-5">
          <img
            className="w-full rounded-lg mr-0 md:mr-5 mb-5 md:mb-0 mt-5 md:mt-24"
            src={FrozenShoulderImage}
            alt="Chiropractic Care for Frozen Shoulder"
          />
          <div className="text-content w-full">
            <h1 className="text-2xl sm:text-4xl font-bold mb-5 mt-10">
              SJA Care Services: Thawing Out Frozen Shoulder with Chiropractic Care
            </h1>
            <p className="text-base sm:text-lg leading-relaxed mb-5">
              Are you dealing with the frustration and pain of a frozen shoulder? At SJA Care Services, we understand how this condition can make even the simplest tasks feel daunting. Our compassionate and skilled chiropractors are here to provide effective treatment, helping you regain mobility and live pain-free.
            </p>
            <h2 className="text-xl sm:text-2xl font-bold mb-5">
              Understanding Frozen Shoulder
            </h2>
            <p className="text-base sm:text-lg leading-relaxed mb-5">
              Frozen shoulder, also known as adhesive capsulitis, is characterized by stiffness, pain, and reduced range of motion in the shoulder joint. This condition often develops slowly and can significantly impact your daily activities, making it difficult to lift your arm, reach for objects, or even dress yourself. It commonly affects people between the ages of 40 and 60, and while the exact cause is often unclear, it can be associated with prolonged immobility, shoulder injuries, diabetes, or other health conditions. Frozen shoulder typically progresses through three stages:
            </p>
            <ul className="list-disc list-inside mb-5">
              <li className="text-base sm:text-lg leading-relaxed">
                <strong>Freezing:</strong> This is the initial stage, characterized by increasing pain and a gradual loss of movement.
              </li>
              <li className="text-base sm:text-lg leading-relaxed">
                <strong>Frozen:</strong> This stage can last several months and involves significant stiffness and limited movement in your shoulder.
              </li>
              <li className="text-base sm:text-lg leading-relaxed">
                <strong>Thawing:</strong> During this stage, the pain gradually improves, and your range of motion slowly returns.
              </li>
            </ul>
            <h2 className="text-xl sm:text-2xl font-bold mb-5">
              Causes of Frozen Shoulder
            </h2>
            <p className="text-base sm:text-lg leading-relaxed mb-5">
              While the exact cause of frozen shoulder isn't always clear, some factors can increase your risk:
            </p>
            <ul className="list-disc list-inside mb-5">
              <li className="text-base sm:text-lg leading-relaxed">
                <strong>Age:</strong> Frozen shoulder is more common in people over 40.
              </li>
              <li className="text-base sm:text-lg leading-relaxed">
                <strong>Diabetes:</strong> People with diabetes are more likely to develop frozen shoulder.
              </li>
              <li className="text-base sm:text-lg leading-relaxed">
                <strong>Injury or surgery:</strong> Trauma to the shoulder or previous surgery can increase your risk.
              </li>
              <li className="text-base sm:text-lg leading-relaxed">
                <strong>Immobilization:</strong> Keeping your shoulder immobilized for an extended period can contribute to frozen shoulder.
              </li>
            </ul>
            <h2 className="text-xl sm:text-2xl font-bold mb-5">
              How Chiropractic Care Can Help Manage Frozen Shoulder
            </h2>
            <p className="text-base sm:text-lg leading-relaxed mb-5">
              At SJA Care Services, we take a holistic and personalized approach to treating frozen shoulder. Our goal is not just to relieve your pain but to address the root causes and help you regain full function. Here’s how we can help:
            </p>
            <ul className="list-disc list-inside mb-5">
              <li className="text-base sm:text-lg leading-relaxed">
                <strong>Improved Joint Mobility:</strong> Gentle chiropractic adjustments can help restore some degree of movement in your shoulder joint, reducing stiffness and increasing your range of motion.
              </li>
              <li className="text-base sm:text-lg leading-relaxed">
                <strong>Pain Management:</strong> By addressing misalignments in the spine and joints, chiropractic adjustments may help decrease pain and inflammation in your shoulder.
              </li>
              <li className="text-base sm:text-lg leading-relaxed">
                <strong>Improved Soft Tissue Function:</strong> Chiropractic care can incorporate soft tissue therapy techniques to break down scar tissue and improve flexibility in the shoulder muscles and surrounding tissues.
              </li>
              <li className="text-base sm:text-lg leading-relaxed">
                <strong>Faster Healing:</strong> Chiropractic care may promote a faster return to normal activities by encouraging blood flow and the body's natural healing processes.
              </li>
            </ul>
            <h2 className="text-xl sm:text-2xl font-bold mb-5">
              What to Expect at SJA Care Services
            </h2>
            <p className="text-base sm:text-lg leading-relaxed mb-5">
              At SJA Care Services, we understand that frozen shoulder affects everyone differently. Your treatment plan might include a combination of chiropractic adjustments, therapeutic exercises to gradually improve range of motion and strengthen muscles, and home care recommendations like applying ice or heat. We'll prioritize your comfort and safety throughout the process, tailoring adjustments to accommodate your specific condition.
            </p>
            <p className="text-base sm:text-lg leading-relaxed mb-5">
              Frozen shoulders don't have to keep you feeling cold and restricted. Here at SJA Care Services, we're committed to helping you thaw things out and regain mobility in your shoulder. Contact us today to schedule a consultation and discuss how chiropractic care can benefit your frozen shoulder management plan.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrozenShoulder;
