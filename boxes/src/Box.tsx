/** Colored box presentation
 *
 * Props:
 * - id (unique)
 * - width
 * - height
 * - backgroundColor
 * - remove (function to call)
 *
 * BoxList -> Box
 */


interface BoxInterface {
  id: number;
  width: number;
  height: number;
  backgroundColor: string;
  remove():void;
}

function Box({ id: number, width = 5, height = 5, backgroundColor: string, remove}) {

  /** Remove a box. */
  function handleRemove() {
    remove(id);
  }

  return (
    <div className="Box">
      <div className="Box-box"
        style={{
          height: `${height}em`,
          width: `${width}em`,
          backgroundColor: backgroundColor
        }}
      />
      <button
        className="Box-removeBtn"
        onClick={handleRemove}>
        Remove The Box!
      </button>
    </div>
  );
}

export default Box;
