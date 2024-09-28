import React from "react";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

//internal import
import Layout from "@layout/Layout";
import useGetSetting from "@hooks/useGetSetting";
import PageHeader from "@components/header/PageHeader";
import useUtilsFunction from "@hooks/useUtilsFunction";

const Faq = () => {
  const { storeCustomizationSetting } = useGetSetting();
  const { showingTranslateValue } = useUtilsFunction();

  return (
    <Layout title="FAQ" description="This is faq page">
      <PageHeader
        headerBg={storeCustomizationSetting?.faq?.header_bg}
        title={showingTranslateValue(storeCustomizationSetting?.faq?.title)}
      />
      <div className="bg-white">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-10 py-10 lg:py-12">
          <div className="grid gap-4 lg:mb-8 items-center md:grid-cols-2 xl:grid-cols-2">
            <div className="pr-16">
              <Image
                width={720}
                height={550}
                src={storeCustomizationSetting?.faq?.left_img || "/faq.svg"}
                alt="logo"
              />
            </div>
            <div className="">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-3 text-base font-medium text-left text-gray-600 focus:text-emerald-500 bg-gray-50 hover:bg-emerald-50 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span>
                        {/* {showingTranslateValue(
                          storeCustomizationSetting?.faq?.faq_one
                        )} */}
                        

                        What is the difference between Ayurveda, Homeopathy, and Unani?
                      </span>
                      <ChevronUpIcon
                        className={`${
                          open ? "transform rotate-180 text-emerald-500" : ""
                        } w-5 h-5 text-gray-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-3 pb-8 text-sm leading-7 text-gray-500">
                      {/* {showingTranslateValue(
                        storeCustomizationSetting?.faq?.description_one
                      )} */}
                      

                          <p className="pt-4">Ayurveda, Homeopathy, and Unani are three ancient systems of medicine that have been practiced for centuries. While they share some similarities, they also have distinct characteristics and approaches to healthcare.</p>
                          <p className="pt-4">Ayurveda is a holistic system of medicine that originated in India. It emphasizes the interconnectedness of mind, body, and spirit. Ayurveda seeks to balance the three doshas (Vata, Pitta, and Kapha) that govern bodily functions. Treatment plans are personalized based on individual dosha imbalances and constitutional factors.</p>
                          <p className="pt-4">Homeopathy was developed in Germany in the late 18th century. It is based on the principle of "like cures like," meaning that substances that produce similar symptoms in a healthy person can be used to treat those symptoms in a sick person. Homeopathic remedies are highly diluted and are believed to stimulate the body's natural healing abilities.</p>
                          <p className="pt-4">Unani medicine, also known as Greco-Arab medicine, has its roots in ancient Greece and Persia. It emphasizes the importance of balance and harmony in the body. Unani practitioners use a variety of therapies, including herbal remedies, dietary recommendations, bloodletting, and cupping.</p>

                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-3 text-base font-medium text-left text-gray-600 focus:text-emerald-500 bg-gray-50 hover:bg-emerald-50 rounded-lg focus:outline-none">
                      <span>
                        {" "}
                        {/* {showingTranslateValue(
                          storeCustomizationSetting?.faq?.faq_two
                        )} */}
                        Are your products safe and effective? 
                      </span>
                      <ChevronUpIcon
                        className={`${
                          open ? "transform rotate-180 text-emerald-500" : ""
                        } w-5 h-5 text-gray-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-3 pb-8 text-sm leading-7 text-gray-500">
                      {/* {showingTranslateValue(
                        storeCustomizationSetting?.faq?.description_two
                      )} */}
                       <p className="pt-4">Yes, our products are safe and effective. We source our ingredients from reputable suppliers and adhere to strict quality control standards to ensure the purity and potency of our products.</p>
                          <p className="pt-4">Our Ayurvedic, Homeopathic, and Unani formulations are backed by centuries of traditional knowledge and have been used safely by millions of people around the world. However, it is important to consult with a healthcare professional before starting any new treatment, especially if you have underlying health conditions or are taking other medications.</p>
                          <p className="pt-4">Please note: While our products are generally safe, individual results may vary. If you experience any adverse reactions, discontinue use, and consult with a healthcare provider.</p>
                         

                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-3 text-base font-medium text-left text-gray-600 focus:text-emerald-500 bg-gray-50 hover:bg-emerald-50 rounded-lg focus:outline-none">
                      <span>
                        {/* {" "}
                        {showingTranslateValue(
                          storeCustomizationSetting?.faq?.faq_three
                        )} */}
                        Do your products have any side effects?
                      </span>
                      <ChevronUpIcon
                        className={`${
                          open ? "transform rotate-180 text-emerald-500" : ""
                        } w-5 h-5 text-gray-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-3 pb-8 text-sm leading-7 text-gray-500">
                      {/* {showingTranslateValue(
                        storeCustomizationSetting?.faq?.description_three
                      )} */}
                        <p className="pt-4">Ayurvedic, Homeopathic, and Unani medicines are generally considered to have fewer side effects compared to conventional medications. This is because they often use natural ingredients and are formulated in a way that minimizes potential adverse reactions.</p>
                          <p className="pt-4">However, it is important to note that individual responses can vary. Some people may experience mild side effects, such as digestive issues or allergic reactions. If you have any underlying health conditions or are taking other medications, it is crucial to consult with a healthcare professional before starting any new treatment.</p>
                          <p className="pt-4">Here are some factors that can influence the likelihood of side effects:
Individual sensitivity: Some people may be more sensitive to certain ingredients or formulations.
Dosage: Exceeding the recommended dosage can increase the risk of side effects.
Interactions with other medications: Ayurvedic, Homeopathic, and Unani medicines may interact with other medications you are taking.
If you experience any adverse reactions while using our products, please discontinue use and contact our customer service team. We will provide guidance and assist you in addressing the issue.
</p>
                         
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-3 text-base font-medium text-left text-gray-600 focus:text-emerald-500 bg-gray-50 hover:bg-emerald-50 rounded-lg focus:outline-none">
                      <span>
                        {" "}
                        {/* {showingTranslateValue(
                          storeCustomizationSetting?.faq?.faq_four
                        )} */}
                        How long does it take to see results?
                      </span>
                      <ChevronUpIcon
                        className={`${
                          open ? "transform rotate-180 text-emerald-500" : ""
                        } w-5 h-5 text-gray-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-3 pb-8 text-sm leading-7 text-gray-500">
                      {/* {showingTranslateValue(
                        storeCustomizationSetting?.faq?.description_four
                      )} */}
                          <p className="pt-4">The time it takes to see results from using Ayurvedic, Homeopathic, or Unani medicines can vary depending on several factors, including:</p>
                          <p className="pt-4">Individual factors: Your body's unique constitution, overall health, and lifestyle can influence how quickly you respond to treatment.</p>
                          <p className="pt-4">Condition being treated: Chronic conditions may require longer treatment periods compared to acute illnesses.</p>
                          <p className="pt-4">Dosage and frequency of use: Adhering to the recommended dosage and usage instructions is essential for achieving optimal results.</p>
                          <p className="pt-4">Generally, it may take several weeks or even months to notice significant improvements. It is important to be patient and consistent with your treatment.
If you have concerns about the progress of your treatment, please consult with a healthcare professional. They can assess your individual situation and provide guidance.
</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-3 text-base font-medium text-left text-gray-600 focus:text-emerald-500 bg-gray-50 hover:bg-emerald-50 rounded-lg focus:outline-none">
                      <span>
                        {/* {showingTranslateValue(
                          storeCustomizationSetting?.faq?.faq_five
                        )} */}
                        Product-Specific Questions

                      </span>
                      <ChevronUpIcon
                        className={`${
                          open ? "transform rotate-180 text-emerald-500" : ""
                        } w-5 h-5 text-gray-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-3 pb-8 text-sm leading-7 text-gray-500">
                      {/* {showingTranslateValue(
                        storeCustomizationSetting?.faq?.description_five
                      )} */}
                      <p className="pt-4">Can I take your products with other medications?
It is generally recommended to consult with a healthcare professional before combining Ayurvedic, Homeopathic, or Unani medicines with other medications.
While natural remedies are often considered safer than conventional drugs, they can still interact with other substances. Some potential interactions may include:
Drug-herb interactions: Certain herbs can interfere with the absorption or effectiveness of prescription medications.
Herb-herb interactions: Different herbs can interact with each other, potentially altering their therapeutic effects.
To avoid any negative interactions, it is best to discuss your planned use of Ayurvedic, Homeopathic, or Unani medicines with your doctor or pharmacist. They can assess your specific situation and provide guidance on whether it is safe to combine them with your current medications.
</p>
                          <p className="pt-4">Are your products suitable for children or pregnant women?
The suitability of our products for children and pregnant women depends on specific factors and individual circumstances.
Children:
Generally, Ayurvedic, Homeopathic, and Unani medicines are considered safe for children when used appropriately.
However, it is crucial to consult with a paediatrician or healthcare professional before giving any of our products to a child. They can assess the child's age, weight, and overall health to determine the appropriate dosage and safety considerations.
Pregnant Women:
Pregnant women should always consult with their obstetrician or healthcare provider before using any new medication or supplement.
Some Ayurvedic, Homeopathic, and Unani herbs or formulations may not be safe for pregnant women. It is essential to discuss your specific situation with a qualified healthcare professional to get personalized advice.
If you have any concerns about using our products during pregnancy or with children, please consult with a healthcare provider for guidance.
</p>
                          <p className="pt-4">How should I store your products?
To ensure the quality and potency of your Ayushalya products, please store them according to the following guidelines:
Cool, Dry Place: Keep products in a cool, dry environment away from direct sunlight, heat, and excessive humidity.
Original Packaging: Store products in their original packaging to protect them from moisture and contaminants.
Avoid Extreme Temperatures: Do not expose products to extreme temperatures, such as freezing or excessive heat.
Check Expiration Dates: Regularly check the expiration date on the product label and discard any products that have passed their expiration date.
By following these storage guidelines, you can help maintain the effectiveness and safety of your Ayushalya products.
</p>
                         
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-3 pt-4 mb-4 text-base font-medium text-left text-gray-600 focus:text-emerald-500 bg-gray-50 hover:bg-emerald-50 rounded-lg focus:outline-none">
                      <span>
                        {/* {showingTranslateValue(
                          storeCustomizationSetting?.faq?.faq_six
                        )} */}
                        Ordering & Delivery Questions

                      </span>
                      <ChevronUpIcon
                        className={`${
                          open ? "transform rotate-180 text-emerald-500" : ""
                        } w-5 h-5 text-gray-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-3 pb-8 text-sm leading-7 text-gray-500">
                      {/* {showingTranslateValue(
                        storeCustomizationSetting?.faq?.description_six
                      )} */}
                      <p>
                      How can I place an order?
You can place an order with Ayushalya in several ways:
Online: Visit our website (www.ayushalya.com) and browse our product catalogue. Select the items you want to purchase and add them to your cart. Proceed to checkout, enter your shipping and payment information, and complete the order.
By Phone: Call our customer service number and place your order over the phone. Our representatives will assist you with the process.
In Person: You can visit us and make your purchase in person.
Please note that availability may vary depending on your location and the specific products you are interested in.
What are your shipping options and costs?
Please refer to Delivery Information Page.
What is your return policy?
Please refer to Return, Refunds & Cancellation Policy Page.

                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-3 text-base font-medium text-left text-gray-600 focus:text-emerald-500 bg-gray-50 hover:bg-emerald-50 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span>
                        {" "}
                        {/* {showingTranslateValue(
                          storeCustomizationSetting?.faq?.faq_seven
                        )} */}
                        Customer Support Questions

                      </span>
                      <ChevronUpIcon
                        className={`${
                          open ? "transform rotate-180 text-emerald-500" : ""
                        } w-5 h-5 text-gray-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-3 pb-8 text-sm leading-7 text-gray-500">
                      {/* {showingTranslateValue(
                        storeCustomizationSetting?.faq?.description_seven
                      )} */}
                      <p>
                      How can I contact customer service?
You can visit contact us page.
What are your business hours?
Monday to Saturday: 10:00 AM to 06:00 PM IST

                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-3 text-base font-medium text-left text-gray-600 focus:text-emerald-500 bg-gray-50 hover:bg-emerald-50 rounded-lg focus:outline-none">
                      <span>
                        {/* {showingTranslateValue(
                          storeCustomizationSetting?.faq?.faq_eight
                        )} */}
                        If you have any other questions, please do not hesitate to contact us.

                      </span>
                      <ChevronUpIcon
                        className={`${
                          open ? "transform rotate-180 text-emerald-500" : ""
                        } w-5 h-5 text-gray-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-3 pb-8 text-sm leading-7 text-gray-500">
                      {/* {showingTranslateValue(
                        storeCustomizationSetting?.faq?.description_eight
                      )} */}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Faq;
