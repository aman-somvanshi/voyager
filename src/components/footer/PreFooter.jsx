import React from 'react';
import './PreFooter.css';
import ReadMoreLess from './ReadMoreLess.jsx'; // Assuming ReadMoreLess is now .jsx

function PreFooter() {
  const aboutBlocks = [
    "<p>Launched in 2007, ixigo is a technology company focused on empowering Indian travellers to plan, book and manage their trips across rail, air, buses and hotels. We assist travellers in making smarter travel decisions by leveraging artificial intelligence, machine learning, and data science led innovations on our OTA platforms, comprising our websites and mobile applications. Our vision is to become the most customer-centric travel company, by offering the best customer experience to our users. Our focus on travel utility and customer experience for travellers in the 'next billion user' segment is driven by technology, cost-efficiency and our culture of innovation has made us India's leading travel ecosystem for the 'next billion users'.</p>",
    "<p>Our OTA platforms allow travellers to book train tickets, flight tickets, bus tickets, hotels and cabs, while providing travel utility tools and services developed using in-house proprietary algorithms and crowd-sourced information, including train PNR status and confirmation predictions, train seat availability alerts, train running status updates and delay predictions, flight status updates, bus running status, pricing and availability alerts, deal discovery, destination content, personalized recommendations, instant fare alerts, and automated customer support services. Read our travel stories where we cover everything from flight news, latest travel news, Indian Railways reservation updates and more. Let us help you plan your next vacation with our trip planner.</p>",
    "<h2> Here's how we can help you: </h2>",
    "<table style='padding: 15px; text-align: left; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);'>" +
    "<tbody>" +
    "<tr><td class='bg-charcoal-40'><strong>Flights</strong></td><td class='bg-charcoal-40'>Book domestic as well as international flights on Voyager. Check Flight Status for domestic or international flights</td></tr>" +
    "<tr><td class='bg-charcoal-40'><strong>Trains</strong></td><td class='bg-charcoal-40'>Search and book train tickets. Check PNR status & Train running status.</td></tr>" +
    "<tr><td class='bg-charcoal-40'><strong>Bus Booking</strong></td><td class='bg-charcoal-40'>Choose from different types of buses. From state buses to luxury volvos, book them all on Voyager.</td></tr>" +
    "<tr><td class='bg-charcoal-40'><strong>Hotels</strong></td><td class='bg-charcoal-40'>Find thousands of cheap hotels on Voyager. We have something for every budget.</td></tr>" +
    "</tbody>" +
    "</table>",
    "<h2> Flight Booking on Voyager</h2>",
    "<p>Voyager flights app and website simplify flight booking. Travellers can finalise their bookings in just a matter of a few clicks. It's both simple and fast. Get free cancellation on your flight tickets. Also, we have multiple flight booking offers to help you save money.</p>",
    "<h2>Domestic Flights on Voyager</h2>",
    "<p>We offer Cancellation protection on domestic flights. Get the cheapest domestic airfare with help of fare drop alerts. Our technology helps travellers book cheap flights, hotels and cabs on arrival or departure.</p>",
    "<h2>Flight Status Tracking on ixigo</h2>",
    "<p>Our Flight Status Tracker Pro feature provides real-time updates, keeping you informed about your flight, boarding gate, and baggage belt information. Receive instant alerts on any delays to ensure your travel plans stay on track.</p>",
    "<b>Airline-Specific Flight Status:</b>",
    "<ul class='airline-status-list'>\n" +
    "  <li class='airline-status-item'><a href='#' class='airline-link'>Air India Flight Status</a></li>\n" +
    "  <li class='airline-status-item'><a href='#' class='airline-link'>SpiceJet Flight Status</a></li>\n" +
    "  <li class='airline-status-item'><a href='#' class='airline-link'>IndiGo Flight Status</a></li>\n" +
    "  <li class='airline-status-item'><a href='#' class='airline-link'>Vistara Flight Status</a></li>\n" +
    "</ul>",
    "<h2>International Flights on Voyager</h2>",
    "<p>Our helpful filters will assist in finding a suitable international destination for your next vacation. Get personalised recommendations on international flight ticket booking and hotels. All your travel needs are fulfilled in a few seconds.</p>",
    "<p>Here are some trending international destinations from popular Indian cities:</p>",
    "<table class='useful-links-table'>",
    "  <tr>",
    "    <td><a href='#' class='international-flight-link'>Delhi to Canada Flights</a></td>",
    "    <td><a href='#' class='international-flight-link'>Delhi to Malaysia Flights</a></td>",
    "  </tr>",
    "  <tr>",
    "    <td><a href='#' class='international-flight-link'>Delhi to Thailand Flights</a></td>",
    "    <td><a href='#' class='international-flight-link'>Delhi to Nepal Flights</a></td>",
    "  </tr>",
    "  <tr>",
    "    <td><a href='#' class='international-flight-link'>Mumbai to Thailand Flights</a></td>",
    "    <td><a href='#' class='international-flight-link'>Delhi to Turkey Flights</a></td>",
    "  </tr>",
    "  <tr>",
    "    <td><a href='#' class='international-flight-link'>Mumbai to Canada Flights</a></td>",
    "    <td><a href='#' class='international-flight-link'>Mumbai to Turkey Flights</a></td>",
    "  </tr>",
    "  <tr>",
    "    <td><a href='#' class='international-flight-link'>Delhi to Vietnam Flights</a></td>",
    "    <td><a href='#' class='international-flight-link'>Mumbai to Vietnam Flights</a></td>",
    "  </tr>",
    "</table>"
  ];

  const initialParagraphsToShow = 1;
  const isParagraphs = true;
  const firstParagraphTruncateLength = 250; // Adjust as needed

  return (
    <div className="pre-footer">
      <div className="pre-footer-container">
        <h2>About Voyager</h2>
        <ReadMoreLess
          content={aboutBlocks}
          initialParagraphsToShow={initialParagraphsToShow}
          isParagraphs={isParagraphs}
          truncateFirstParagraphAt={firstParagraphTruncateLength}
        />
      </div>
    </div>
  );
}

export default PreFooter;