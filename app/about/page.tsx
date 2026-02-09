import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      

      {/* ✅ Using existing file: public/next.svg */}
      <Image
        src="/next.svg"
        alt="Next.js logo"
        width={120}
        height={30}
        className="h-auto w-35"
        priority
      />

<h1 className="text-4xl font-bold">About Us</h1>

      <p className="text-gray-700">
        We are a company dedicated to providing the best solutions for your needs.
        Our team is passionate about creating modern, scalable, and user-friendly applications.
      </p>

      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li>Innovative technology</li>
        <li>Professional team</li>
        <li>Customer satisfaction</li>
      </ul>

      <section className="pt-6 border-t">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 rounded-lg border bg-white p-5">
            <h2 className="text-xl font-semibold">Column One</h2>
            <p className="mt-2 text-gray-700">
              On mobile, this stacks vertically. On desktop, it sits side-by-side.
            </p>
          </div>

          <div className="flex-1 rounded-lg border bg-white p-5">
            <h2 className="text-xl font-semibold">Column Two</h2>
            <p className="mt-2 text-gray-700">
              Distinct background colors help you see the Flexbox layout clearly.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

