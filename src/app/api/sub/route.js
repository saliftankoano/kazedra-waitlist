// createSubscriptionSchedule.js
import stripe from "./stripe.js";

export function POST(req) {
  const customerId = "cus_xxxxxxx";
  const price = "price_xxxxxxx";
  const nextMonthStartDate = Math.floor(
    new Date("2024-10-01").getTime() / 1000
  ); // UNIX timestamp for the next month's start date

  createSubscriptionSchedule(customerId, price, nextMonthStartDate);
}

async function createSubscriptionSchedule(
  customerId,
  price,
  nextMonthStartDate
) {
  try {
    // Create a subscription schedule
    const subscriptionSchedule = await stripe.subscriptionSchedules.create({
      customer: customerId,
      start_date: "now", // Start immediately
      end_behavior: "release", // What happens after all phases are complete
      phases: [
        {
          items: [{ price: price }],
          // Start immediately
          start_date: Math.floor(Date.now() / 1000),
        },
        {
          items: [{ price: price }],
          // Start on the specific date next month
          start_date: nextMonthStartDate,
        },
      ],
    });

    console.log("Subscription schedule created:", subscriptionSchedule);
    return subscriptionSchedule;
  } catch (error) {
    console.error("Error creating subscription schedule:", error);
    throw error;
  }
}
