import Loader from "@/components/shared/Loader/loader";

function loading() {
  return (
    <div className="w-full h-[70vh] flex justify-center items-center">
      <Loader />
    </div>
  );
}

export default loading;
