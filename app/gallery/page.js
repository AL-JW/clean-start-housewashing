export const metadata = {
  title: "Gallery | Clean Start",
  description: "Recent painting and exterior washing projects.",
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen px-6 py-12 rounded-xl mx-4 mb-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Gallery</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        <img
          src="/images/Crowly_Wood_Replace.jpg"
          alt="Paint Job 1"
          className="rounded shadow"
        />
        <img
          src="/images/Epay_Stain_Job.jpg"
          alt="Paint Job 2"
          className="rounded shadow"
        />
        <img
          src="/images/Interior_Work_Mid_Job.jpg"
          alt="Paint Job 3"
          className="rounded shadow"
        />
        {/* Add more as you get them */}
        <img
          src="/images/Library_Top_Done_bottom_beforepaint.jpg"
          alt="Paint Job 3"
          className="rounded shadow"
        />
        <img
          src="/images/Mays_logs.jpg"
          alt="Paint Job 3"
          className="rounded shadow"
        />
        <img
          src="/images/MAys-Kayak_Rack.jpg"
          alt="Paint Job 3"
          className="rounded shadow"
        />
        <img
          src="/images/odd_topper_paintjob.jpg"
          alt="Paint Job 3"
          className="rounded shadow"
        />
        <img
          src="/images/Prep_Mid_Finish.jpg"
          alt="Paint Job 3"
          className="rounded shadow"
        />
        <img
          src="/images/red_brown_house.jpg"
          alt="Paint Job 3"
          className="rounded shadow"
        />
        <img
          src="/images/Shiny_house_Lakeside.jpg"
          alt="Paint Job 3"
          className="rounded shadow"
        />
        <img
          src="/images/shinyhouse_closeup.jpg"
          alt="Paint Job 3"
          className="rounded shadow"
        />
        <img
          src="/images/Vertical_High_Paint.jpg"
          alt="Paint Job 3"
          className="rounded shadow"
        />
      </div>
    </main>
  );
}
