"use client";

export default function About() {
  return (
    <div>
      <div>
        <div className="flex flex-col items-center justify-center">
          <div>
            <h1 className="flex flex-col items-center justify-center font-bold mt-20 mb-3 text-5xl">
              {"ProductSphere@UW"}
            </h1>
            <h2 className="flex flex-col items-center justify-center font-bold mb-3 text-4xl">
              {"Meet the Team!"}
            </h2>
          </div>
          {/* grid container */}
          <div class="gridcont">
            <div className="grid-item">Item 1</div>
            <div className="grid-item">Item 2</div>
            <div className="grid-item">Item 3</div>
            <div className="grid-item">Item 4</div>
            <div className="grid-item">Item 5</div>
            <div className="grid-item">Item 6</div>
            <div className="grid-item">Item 7</div>
          </div>
        </div>
      </div>
    </div>
  );
}
