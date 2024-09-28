import React from "react";

//internal import
import Layout from "@layout/Layout";
import useGetSetting from "@hooks/useGetSetting";
import PageHeader from "@components/header/PageHeader";
import CMSkeleton from "@components/preloader/CMSkeleton";
import useUtilsFunction from "@hooks/useUtilsFunction";

const PrivacyPolicy = () => {
  const { storeCustomizationSetting, loading, error } = useGetSetting();
  const { showingTranslateValue } = useUtilsFunction();
  // console.log("data", storeCustomizationSetting);

  return (
    <Layout title="Privacy Policy" description="This is privacy policy page">
      <PageHeader
        headerBg={storeCustomizationSetting?.privacy_policy?.header_bg}
        title={showingTranslateValue(
          storeCustomizationSetting?.privacy_policy?.title
        )}
      />
      <div className="bg-white">
        <div className="max-w-screen-2xl mx-auto lg:py-20 py-10 px-4 sm:px-10">
          {/* <CMSkeleton
            html
            count={15}
            height={15}
            error={error}
            loading={loading}
            data={storeCustomizationSetting?.privacy_policy?.description}
          /> */}
          {/* <br /> */}
          <CMSkeleton count={15} height={15} loading={loading} />
          <br />
          <CMSkeleton count={15} height={15} loading={loading} />
          {/* <div className="mb-8 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
              {t("common:privacy-policy-consent")}
            </h2>
            <div className="font-sans leading-7">
              <p>{t("common:privacy-policy-consent-docs")}</p>
            </div>
          </div>
          <div className="mb-8 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
              {t("common:privacy-policy-information")}
            </h2>
            <div className="font-sans leading-7">
              <p>{t("common:privacy-policy-information-docs1")}</p>
              <p>{t("common:privacy-policy-information-docs2")}</p>
            </div>
          </div>
          <div className="mb-8 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
              {t("common:privacy-policy-use-information")}
            </h2>
            <div className="font-sans leading-7">
              <p>{t("common:privacy-policy-use-information-docs")}</p>

              <ol>
                <li>{t("common:privacy-policy-use-information-docs1")}</li>
                <li>{t("common:privacy-policy-use-information-docs2")}</li>
                <li>{t("common:privacy-policy-use-information-docs3")}</li>
                <li>{t("common:privacy-policy-use-information-docs4")}</li>
                <li>{t("common:privacy-policy-use-information-docs5")}</li>
                <li>{t("common:privacy-policy-use-information-docs6")}</li>
                <li>{t("common:privacy-policy-use-information-docs7")}</li>
              </ol>
            </div>
          </div>
          <div className="mb-8 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
              {t("common:privacy-policy-log-file")}
            </h2>
            <div className="font-sans leading-7">
              <p>{t("common:privacy-policy-log-file-docs")}</p>
            </div>
          </div>
          <div className="mb-8 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
              {t("common:privacy-policy-advertising")}
            </h2>
            <div className="font-sans leading-7">
              <p>{t("common:privacy-policy-advertising-docs")}</p>
            </div>
          </div>
          <div className="mb-8 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
              {t("common:privacy-policy-third-party")}
            </h2>
            <div className="font-sans leading-7">
              <p>{t("common:privacy-policy-third-party-docs1")}</p>
              <p>{t("common:privacy-policy-third-party-docs2")}</p>
            </div>
          </div>
          <div className="mb-8 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
              {t("common:privacy-policy-ccpa-rights")}
            </h2>
            <div className="font-sans leading-7">
              <p>{t("common:privacy-policy-ccpa-rights-docs")}</p>
            </div>
          </div>
          <div className="mb-8 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
              {t("common:privacy-policy-children-information")}
            </h2>
            <div className="font-sans leading-7">
              <p>{t("common:privacy-policy-children-information-docs1")}</p>
              <p>{t("common:privacy-policy-children-information-docs2")}</p>
            </div>
          </div> */}

<div className="">
      
      <p className="mb-4">
        <strong>Effective Date:</strong> September 7, 2024
      </p>
      <p className="mb-4">
        Ayushalya is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information when you visit our website (<a href="http://www.ayushalya.com" className="text-blue-500 hover:underline">www.ayushalya.com</a>) or interact with our services.
      </p>

      <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
      <p className="mb-2">
        <strong>Personal Information:</strong> When you interact with our website or services, we may collect personal information such as your name, email address, phone number, shipping address, and payment information.
      </p>
      <p className="mb-4">
        <strong>Usage Data:</strong> We may also collect information about how you use our website, including your IP address, browser type, referring/exit pages, and operating system.
      </p>

      <h2 className="text-xl font-semibold mb-2">How We Use Your Information</h2>
      <p className="mb-4">
        We use your information to:
        <ul className="list-disc ml-6 mt-2">
          <li>Process your orders and provide customer support.</li>
          <li>Communicate with you about your orders, promotions, and updates.</li>
          <li>Improve our website and services.</li>
          <li>Analyze usage patterns and trends.</li>
          <li>Protect against fraud and abuse.</li>
        </ul>
      </p>

      <h2 className="text-xl font-semibold mb-2">Disclosure of Your Information</h2>
      <p className="mb-4">
        We may share your personal information with:
        <ul className="list-disc ml-6 mt-2">
          <li>Third-party service providers who help us operate our website and services.</li>
          <li>Law enforcement authorities or other legal entities as required by law.</li>
        </ul>
      </p>

      <h2 className="text-xl font-semibold mb-2">Your Rights</h2>
      <p className="mb-4">
        You have the right to:
        <ul className="list-disc ml-6 mt-2">
          <li>Access and correct your personal information.</li>
          <li>Request the deletion of your personal information.</li>
          <li>Object to the processing of your personal information.</li>
          <li>Restrict the processing of your personal information.</li>
        </ul>
      </p>

      <h2 className="text-xl font-semibold mb-2">Data Security</h2>
      <p className="mb-4">
        We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is completely secure.
      </p>

      <h2 className="text-xl font-semibold mb-2">Cookies and Tracking Technologies</h2>
      <p className="mb-4">
        We use cookies and similar tracking technologies to collect information about your usage of our website. You can manage your cookie preferences through your browser settings.
      </p>

      <h2 className="text-xl font-semibold mb-2">Children's Privacy</h2>
      <p className="mb-4">
        Our website is not intended for children under the age of 18. We do not knowingly collect personal information from children.
      </p>

      <h2 className="text-xl font-semibold mb-2">Changes to This Privacy Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the updated policy on our website.
      </p>

      <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
      <p className="mb-4">
        If you have any questions about this Privacy Policy or our privacy practices, please contact us.
      </p>

      <p className="text-center">
        By using our website or services, you consent to our collection and use of your information as described in this Privacy Policy.
      </p>
    </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
