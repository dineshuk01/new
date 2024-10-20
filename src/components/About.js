import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }

  render() {
    return (
      <div className="bg-white shadow-md shadow-white py-10">
        <div className="container mx-auto p-6 rounded-lg shadow-lg bg-[#F6DFEB]">
          <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">
            About Us
          </h1>
          <p className="text-lg mb-4 text-gray-700 text-justify">
            Welcome to our gifting company! We are passionate about making every
            occasion special through unique and thoughtful gifts. Our mission is
            to help you express your love and appreciation for your friends and
            family with carefully curated products.
          </p>
          <p className="text-lg mb-4 text-gray-700 text-justify">
            At our company, we believe that a gift is more than just an item;
            it's a gesture of affection that can create lasting memories.
            Whether it's for a birthday, anniversary, holiday, or any special
            event, we offer a wide range of gifts that cater to every taste and
            preference.
          </p>
          <p className="text-lg mb-4 text-gray-700 text-justify">
            Our team works tirelessly to source and create products that are not
            only beautiful but also meaningful. We strive to provide exceptional
            customer service and ensure that your shopping experience is
            seamless and enjoyable.
          </p>
          <p className="text-lg mb-4 text-gray-700 text-justify">
            Thank you for choosing us as your gifting partner. We look forward
            to helping you find the perfect gift for your loved ones!
          </p>

          <h2 className="text-3xl font-semibold mt-10 mb-4 text-gray-800 text-center">
            Our Values
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <li className="bg-blue-100 p-4 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-bold text-blue-600">Quality</h3>
              <p className="text-gray-600">
                We ensure that every product meets high standards of quality and
                craftsmanship.
              </p>
            </li>
            <li className="bg-blue-100 p-4 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-bold text-blue-600">Creativity</h3>
              <p className="text-gray-600">
                Our unique selection reflects innovative designs that stand out.
              </p>
            </li>
            <li className="bg-blue-100 p-4 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-bold text-blue-600">
                Customer-Centric
              </h3>
              <p className="text-gray-600">
                Your satisfaction is our priority, and we are here to assist
                you.
              </p>
            </li>
            <li className="bg-blue-100 p-4 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-bold text-blue-600">
                Sustainability
              </h3>
              <p className="text-gray-600">
                We strive to use eco-friendly materials and practices in our
                business.
              </p>
            </li>
          </ul>

          <h2 className="text-3xl font-semibold mt-10 mb-4 text-gray-800 text-center">
            Join Our Community
          </h2>
          <p className="text-lg text-gray-700 text-center">
            Connect with us on social media and join our community of gift
            enthusiasts. Share your experiences, and let us help you create
            memorable moments!
          </p>
        </div>
      </div>
    );
  }
}

export default About;
