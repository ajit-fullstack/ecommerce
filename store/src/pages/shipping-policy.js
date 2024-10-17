import React from "react";

//internal import
import Layout from "@layout/Layout";
import useGetSetting from "@hooks/useGetSetting";
import PageHeader from "@components/header/PageHeader";
import CMSkeleton from "@components/preloader/CMSkeleton";
import useUtilsFunction from "@hooks/useUtilsFunction";

const TermAndConditions = () => {
  const { storeCustomizationSetting, loading, error } = useGetSetting();
  const { showingTranslateValue } = useUtilsFunction();

  return (
    <Layout
      title="Shipping Policy"
      description="This is terms and conditions page"
    >
      <PageHeader
        headerBg={storeCustomizationSetting?.shipping_policy?.header_bg}
        // title={showingTranslateValue(
        //   storeCustomizationSetting?.shipping_policy?.title
        // )}
        title="Shipping Policy"
      />
      <div className="bg-white">
        <div className="max-w-screen-2xl mx-auto lg:py-10 py-10 px-3 sm:px-10">
          {/* <CMSkeleton
            html
            count={15}
            height={15}
            error={error}
            loading={loading}
            data={storeCustomizationSetting?.term_and_condition?.description}
          /> */}
          <br />
          <CMSkeleton count={15} height={15} loading={loading} />
          <br />
          <CMSkeleton count={15} height={15} loading={loading} />
          {/* <div className="mb-6 lg:mb-12 last:mb-0">
              <p>Please read these Terms & Conditions carefully before accessing or using our website, www.ayushalya.com.</p>
              <p>By accessing or using our website, you agree to be bound by these Terms & Conditions. If you do not agree to these Terms & Conditions, please do not use our website.   </p>
          </div>
        
          <div className="mb-8 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
              {"common:terms-condition-license"}
            </h2>
            <div className="font-sans leading-7">
              <p>{"common:terms-condition-license-docs"}</p>

              <ol >
                <strong className="mb-2">
                1. General Terms
                </strong>
                <li className="pl-5"> <b>Website Access:</b> We grant you a limited, non-exclusive, revocable license to access and use our website for personal, non-commercial purposes.   </li>
                <li className="pl-5"><b>Modifications:</b> We reserve the right to modify or discontinue our website or any part thereof at any time, without notice.</li>
                <li className="pl-5"><b>Intellectual Property:</b> All content on our website, including text, graphics, logos, images, and software, is the property of Ayushalya and is protected by copyright and other intellectual property laws.   </li>
                <li className="pl-5"><b>Prohibited Conduct:</b> You agree not to: </li>
              </ol>

              <ol className="pl-10">
              
                <li>Use our website for any unlawful or prohibited purpose.
                </li>
                <li>Use our website to transmit or distribute any virus, worm, Trojan horse, or other harmful code.</li>
                <li>Attempt to gain unauthorized access to our website or any part thereof.                </li>
                <li>Impersonate any person or entity.
                </li>
                <li>Violate any applicable laws or regulations.
                </li>
              </ol>
              <p>{"common:terms-condition-license-docs8"}</p>
            </div>
            <div className="my-6 lg:my-8 last:mb-0">
              <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
                {"common:terms-condition-liability"}
              </h2>
              <div className="font-sans leading-7">
                <p>{"common:terms-condition-liability-docs"}</p>
              </div>
            </div>
            <div className="my-6 lg:my-8 last:mb-0">
              <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
                {"common:terms-condition-privacy"}
              </h2>
              <div className="font-sans leading-7">
                <p>
                  {"common:terms-condition-privacy-docs1"}
              

                  {"common:terms-condition-privacy-docs2"}

            
                </p>
              </div>
            </div>
            <div className="my-6 lg:my-8 last:mb-0">
              <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
                {"common:terms-condition-rights"}
              </h2>
              <div className="font-sans leading-7">
                <p>{"common:terms-condition-rights-docs"}</p>
              </div>
            </div>
            <div className="my-6 lg:my-8 last:mb-0">
              <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
                {"common:terms-condition-website"}
              </h2>
              <div className="font-sans leading-7">
                <p>{"common:terms-condition-website-docs"}</p>
              </div>
            </div>
            <div className="my-6 lg:my-8 last:mb-0">
              <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
                {"common:terms-condition-disclaimer"}
              </h2>
              <div className="font-sans leading-7">
                <p>{"common:terms-condition-disclaimer-docs"}</p>
                <ul>
                  <li>{"common:terms-condition-disclaimer-docs1"}</li>
                  <li>{"common:terms-condition-disclaimer-docs2"}</li>
                  <li>{"common:terms-condition-disclaimer-docs3"}</li>
                  <li>{"common:terms-condition-disclaimer-docs4"}</li>
                </ul>
                <p>{"common:terms-condition-disclaimer-docs5"}</p>
              </div>
            </div>
          </div> */}
            <div className=" ">
  <h1 className="text-2xl font-bold mb-4">Delivery Policy</h1>
  
  <h2 className="text-xl font-semibold mb-2">Domestic Orders</h2>
  <p className="mb-2">
    <strong>Shipping Methods:</strong> We offer various shipping options to suit your needs, including standard shipping, express shipping, and local pickup.
  </p>
  <p className="mb-2">
    <strong>Shipping Costs:</strong> Shipping costs are calculated based on the weight and size of your order and your delivery location.
  </p>
  <p className="mb-2">
    <strong>Estimated Delivery Times:</strong> Please refer to our shipping carrier's website for estimated delivery times.
  </p>
  <p className="mb-2">
    <strong>Tracking:</strong> You will receive a tracking number once your order is shipped, allowing you to monitor its progress.
  </p>

  <h2 className="text-xl font-semibold mb-2">International Orders</h2>
  <p className="mb-2">
    <strong>Shipping Methods:</strong> We offer international shipping to select countries. Please contact us for more information.
  </p>
  <p className="mb-2">
    <strong>Shipping Costs:</strong> International shipping costs are calculated based on the weight, size, and destination of your order.
  </p>
  <p className="mb-2">
    <strong>Customs Duties & Taxes:</strong> International orders may be subject to customs duties and taxes levied by the destination country. You are responsible for paying these additional charges.
  </p>
  <p className="mb-2">
    <strong>Estimated Delivery Times:</strong> International shipping times may vary depending on the destination country and customs clearance procedures.
  </p>

  <h2 className="text-xl font-semibold mb-2">Delivery Issues</h2>
  <p className="mb-2">
    <strong>Undelivered Orders:</strong> If your order is marked as delivered but you have not received it, please contact us within 4 days. We will investigate the issue and assist you in resolving it.
  </p>
  <p className="mb-2">
    <strong>Incorrect Addresses:</strong> Please double-check your shipping address before placing your order. If the address is incorrect and the order has already been shipped, we may not be able to redirect it.
  </p>

  <p className="mt-4">
    For any questions or concerns regarding your delivery, please contact our customer service team.
  </p>
</div>

          

        </div>
      </div>
    </Layout>
  );
};

export default TermAndConditions;
