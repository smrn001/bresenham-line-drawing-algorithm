import React from "react";

const About = () => {
  return (
    <>
      <div className="max-w-3xl mx-auto p-5">
        <h1 className="text-3xl font-bold mb-5">Bresenham’s Line Algorithm</h1>

        {/* Purpose Section */}
        <section className="mb-5">
          <h2 className="text-2xl font-semibold mb-2">Purpose</h2>
          <p className="text-base leading-relaxed">
            Bresenham’s Line Algorithm is used to draw a straight line between
            two points on a grid (like a computer screen or a canvas). It
            determines the best pixels to light up in order to form the most
            visually straight line possible, using only integer calculations,
            which makes it fast and efficient.
          </p>
        </section>

        {/* Inputs Section */}
        <section className="mb-5">
          <h2 className="text-2xl font-semibold mb-2">Inputs</h2>
          <ul className="list-disc list-inside">
            <li>
              <strong>(x0, y0):</strong> Starting point of the line.
            </li>
            <li>
              <strong>(x1, y1):</strong> Ending point of the line.
            </li>
          </ul>
        </section>

        {/* Outputs Section */}
        <section className="mb-5">
          <h2 className="text-2xl font-semibold mb-2">Outputs</h2>
          <ul className="list-disc list-inside">
            <li>
              A list of coordinates or pixels to be lit up to form the straight
              line between (x0, y0) and (x1, y1).
            </li>
          </ul>
        </section>

        {/* Algorithm Steps Section */}
        <section className="mb-5">
          <h2 className="text-2xl font-semibold mb-2">Algorithm Steps</h2>
          <ol className="list-decimal list-inside">
            <li className="mb-2">
              <strong>Initialize the Differences:</strong>
              <ul className="list-disc list-inside ml-5">
                <li>
                  Calculate the absolute differences in the x and y directions:
                </li>
                <li>dx = |x1 - x0|</li>
                <li>dy = |y1 - y0|</li>
              </ul>
            </li>
            <li className="mb-2">
              <strong>Determine the Direction:</strong>
              <ul className="list-disc list-inside ml-5">
                <li>Determine the direction of movement for both x and y:</li>
                <li>sx = 1 if x1 {">"} x0, else sx = -1</li>
                <li>sy = 1 if y1 {">"} y0, else sy = -1</li>
              </ul>
            </li>
            <li className="mb-2">
              <strong>Calculate the Error:</strong>
              <ul className="list-disc list-inside ml-5">
                <li>
                  The error term is initialized to account for the difference
                  between the x and y movement:
                </li>
                <li>err = dx - dy</li>
              </ul>
            </li>
            <li className="mb-2">
              <strong>Drawing the Line:</strong>
              <ul className="list-disc list-inside ml-5">
                <li>Starting at (x0, y0), plot each pixel.</li>
                <li>
                  Update the error term to decide whether to move horizontally
                  (x-direction) or vertically (y-direction).
                </li>
                <li>
                  If 2*err {">"} -dy, move in the x-direction, adjusting x0.
                </li>
                <li>
                  If 2*err {"<"} dx, move in the y-direction, adjusting y0.
                </li>
              </ul>
            </li>
            <li className="mb-2">
              <strong>Repeat Until Reaching the End Point:</strong>
              <ul className="list-disc list-inside ml-5">
                <li>
                  Continue the above steps until the line reaches the ending
                  point (x1, y1).
                </li>
                <li>
                  The pixel coordinates at each step will be part of the
                  straight line from the start to the end.
                </li>
              </ul>
            </li>
          </ol>
        </section>

        {/* Use Cases */}
        <section className="mb-5">
          <h2 className="text-2xl font-semibold mb-2">Use Cases</h2>
          <ul className="list-disc list-inside">
            <li>Raster Graphics: Drawing straight lines on bitmap images.</li>
            <li>
              Game Development: Rendering lines in pixel-based game engines.
            </li>
            <li>
              Computer Graphics: Efficient line rendering for 2D graphical
              applications.
            </li>
          </ul>
        </section>

        {/* Conclusion */}
        <section className="mb-5">
          <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
          <p className="text-base leading-relaxed">
            Bresenham’s Line Algorithm is a fast, efficient method for drawing
            straight lines in raster graphics. By using simple integer math to
            determine the optimal path for the line, it minimizes computational
            overhead and ensures smooth, straight lines on a grid.
          </p>
        </section>
      </div>
    </>
  );
};

export default About;
