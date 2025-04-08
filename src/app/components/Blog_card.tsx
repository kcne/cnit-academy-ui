export default function BlogCard() {
  return (
    <>
      <div className="flex flex-row border-2 border-solid">
        <div className="border-2 border-solid w-10/12 h-44">
          <p>Enes Korac</p>
          <h3>PROGRAMING: NEXT JS</h3>
          <div>#next</div>
        </div>
        <div className="flex flex-col justify-around ">
          <div>26-03-2025</div>
          <div>
            <p>
              ❤ <b>0</b> 👁️ <b>23</b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
