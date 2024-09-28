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
      title="Terms & Conditions"
      description="This is terms and conditions page"
    >
      <PageHeader
        headerBg={storeCustomizationSetting?.term_and_condition?.header_bg}
        title={showingTranslateValue(
          storeCustomizationSetting?.term_and_condition?.title
        )}
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
      <h1 className="text-2xl font-bold mb-4">Terms & Conditions</h1>
      <p className="mb-4">
        Please read these Terms & Conditions carefully before accessing or using our website, <a href="http://www.ayushalya.com" className="text-blue-500 hover:underline">www.ayushalya.com</a>.
      </p>
      <p className="mb-4">
        By accessing or using our website, you agree to be bound by these Terms & Conditions. If you do not agree to these Terms & Conditions, please do not use our website.
      </p>

      <h2 className="text-xl font-semibold mb-2">1. General Terms</h2>
      <p className="mb-2">
        <strong>Website Access:</strong> We grant you a limited, non-exclusive, revocable license to access and use our website for personal, non-commercial purposes.
      </p>
      <p className="mb-2">
        <strong>Modifications:</strong> We reserve the right to modify or discontinue our website or any part thereof at any time, without notice.
      </p>
      <p className="mb-2">
        <strong>Intellectual Property:</strong> All content on our website, including text, graphics, logos, images, and software, is the property of Ayushalya and is protected by copyright and other intellectual property laws.
      </p>
      <p className="mb-4">
        <strong>Prohibited Conduct:</strong> You agree not to:
        <ul className="list-disc ml-6 mt-2">
          <li>Use our website for any unlawful or prohibited purpose.</li>
          <li>Use our website to transmit or distribute any virus, worm, Trojan horse, or other harmful code.</li>
          <li>Attempt to gain unauthorized access to our website or any part thereof.</li>
          <li>Impersonate any person or entity.</li>
          <li>Violate any applicable laws or regulations.</li>
        </ul>
      </p>

      <h2 className="text-xl font-semibold mb-2">2. Product Information</h2>
      <p className="mb-2">
        <strong>Accuracy:</strong> We strive to provide accurate product information on our website. However, we do not warrant the accuracy, completeness, or reliability of such information.
      </p>
      <p className="mb-2">
        <strong>Pricing:</strong> Prices are subject to change without notice.
      </p>

      <h2 className="text-xl font-semibold mb-2">3. Orders</h2>
      <p className="mb-2">
        <strong>Acceptance:</strong> Your order is subject to our acceptance. We may refuse or cancel any order for any reason.
      </p>
      <p className="mb-2">
        <strong>Payment:</strong> Payment must be made in full at the time of order.
      </p>

      <h2 className="text-xl font-semibold mb-2">4. Shipping & Delivery</h2>
      <p className="mb-2">
        <strong>Shipping:</strong> We will make reasonable efforts to deliver your order on time. However, we are not responsible for delays caused by factors beyond our control.
      </p>
      <p className="mb-2">
        <strong>Delivery:</strong> Delivery is subject to the terms and conditions of our shipping carrier.
      </p>

      <h2 className="text-xl font-semibold mb-2">5. Returns & Refunds</h2>
      <p className="mb-2">
        Returns: Please refer to our <a href="/return-refund-policy" className="text-blue-500 hover:underline">Return & Refund Policy</a> for details on returns and refunds.
      </p>

      <h2 className="text-xl font-semibold mb-2">6. Disclaimer of Warranties</h2>
      <p className="mb-2">
        <strong>No Warranties:</strong> Our website and its contents are provided on an "as is" basis, without warranties of any kind.
      </p>
      <p className="mb-2">
        <strong>Limitation of Liability:</strong> In no event shall Ayushalya be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of our website or its contents.
      </p>

      <h2 className="text-xl font-semibold mb-2">7. Governing Law</h2>
      <p className="mb-2">
        <strong>Jurisdiction:</strong> These Terms & Conditions shall be governed by and construed in accordance with the laws of Delhi.
      </p>
      <p className="mb-2">
        <strong>Dispute Resolution:</strong> Any dispute arising out of or in connection with these Terms & Conditions shall be submitted to small claims court.
      </p>

      <h2 className="text-xl font-semibold mb-2">8. Severability</h2>
      <p className="mb-4">
        <strong>Severable Provisions:</strong> If any provision of these Terms & Conditions is found to be invalid or unenforceable, that provision shall be deemed severable from the remaining provisions and shall not affect the validity or enforceability of the remaining provisions.
      </p>

      <p className="">
        By using our website, you agree to these Terms & Conditions. If you have any questions, please contact us.
      </p>
    </div>

          

        </div>
      </div>
    </Layout>
  );
};

export default TermAndConditions;
