import React from "react";
import Card from "./Card";

const Homecards = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card>
          <h2 class="text-2xl font-bold">For Developers</h2>
            <p class="mt-2 mb-4">
              See projects
            </p>
            <a
              href="/jobs.html"
              class="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Browse Jobs
            </a>
          </Card>
          <Card bg="bg-indigo-100">
            <h2 class="text-2xl font-bold">For Employers</h2>
            <p class="mt-2 mb-4">
              List your job to find the perfect developer for the role
            </p>
            <a
              href="/add-job.html"
              class="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
            >
              Get in touch
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Homecards;
