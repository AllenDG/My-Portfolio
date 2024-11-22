import { Button } from "@/components/ui/button";
import myImage from "@/assets/images/myImage.png";
import myCV from "@/assets/files/alfi.deguzman.pdf"; // Adjust the path as needed

export default function ProfileInfo() {
  const handleDownloadClick = () => {
    const link = document.createElement("a");
    link.href = myCV;
    link.download = "Allen_Walter_De_Guzman_CV.pdf"; // Set the download file name
    link.click();
  };

  const handleEmailClick = () => {
    const email = "Allenwalterfiestada@gmail.com";
    const subject = "Hello, Allen!";
    const body = "Hi Allen, I would like to discuss...";
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.open(gmailLink, "_blank"); // Opens Gmail in a new tab
  };

  return (
    <div className="flex items-start space-x-4 rounded-lg p-4 mt-10">
      <div className="w-32 h-32 mb-4">
        <img
          src={myImage}
          alt="Profile Image"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Name and Location */}
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Allen Walter De Guzman
        </h1>
        <div className="flex items-center text-gray-600 dark:text-gray-400 mt-1">
          <p className="text-sm">Mangaldan, Pangasinan</p>
        </div>
        <p className="text-base text-gray-900 dark:text-gray-200 mt-1">
          UI/UX Designer and Frontend Developer
        </p>

        {/* Buttons */}
        <div className="flex mt-4 space-x-2">
          <Button onClick={handleEmailClick}>Send Email</Button>
          <Button variant="secondary" onClick={handleDownloadClick}>
            Download CV
          </Button>
        </div>
      </div>
    </div>
  );
}
