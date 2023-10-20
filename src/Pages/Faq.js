export default function Faq() {
  return (
    <section id="FAQ" className="bg-slate-50 dark:bg-gray-800 dark:text-gray-100 p-20">
      <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <h2 className="text-2xl font-semibold sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 mb-8 dark:text-gray-400">
          Below is the list of common questions asked when exploring Slid and its capabilities.
        </p>
        <div className="space-y-4">
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
              How can I change the color of the piece?
            </summary>
            <p className="px-4 py-6 pt-2 ml-4 -mt-4 dark:text-gray-400">
              The color of the piece is fully customizable. For sample image and product, please contact our team!{" "}
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
              Can I change the text 'slide' on the piece?
            </summary>
            <p className="px-4 py-6 pt-2 ml-4 -mt-4 dark:text-gray-400">
              Yes - each piece can be customized with desired text or image such as a logo that can fit on the piece. For further specification and inquiries, please contact us!{" "}
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
              Is there a quantity limit for each order?
            </summary>
            <p className="px-4 py-6 pt-2 ml-4 -mt-4 dark:text-gray-400">
              No! Slid can accomodate all different order sizes and specifications. {" "}
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
              How long does the shipping take? 
            </summary>
            <p className="px-4 py-6 pt-2 ml-4 -mt-4 dark:text-gray-400">
              The lead time is dependent on the size and specification of the order. However, once the design is confirmed and production is completed, shipping take around 1.5 weeks. Expedited shipping is also available upon request!   {" "}
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
