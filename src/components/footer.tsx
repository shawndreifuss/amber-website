import { Typography, Button, IconButton } from "@material-tailwind/react";

const CURRENT_YEAR = new Date().getFullYear();
const LINKS = [, "About Us", "Resources", "Donate", "Contact Us"];

export function Footer() {
  return (
    <footer className="pb-5 p-10 md:pt-10">
      <div className="container flex flex-col mx-auto">
        <div className="flex flex-col md:flex-row items-center !justify-between">
          <Typography
            as="a"
            href="/"
            target="_blank"
            variant="h6"
            className="text-gray-900"
          >
           GCAN LOGO
          </Typography>
          <ul className="flex justify-center my-4 md:my-0 w-max mx-auto items-center gap-4">
            {LINKS.map((link, index) => (
              <li key={index}>
                <Typography
                  as="a"
                  href="#"
                  variant="small"
                  color="white"
                  className="font-normal !text-gray-700 hover:!text-gray-900 transition-colors"
                >
                  {link}
                </Typography>
              </li>
            ))}
          </ul>
          <div className="flex w-fit justify-center gap-2">
            <IconButton size="sm" color="blue" variant="text">
              <i className="fa-brands fa-linkedin text-lg" />
            </IconButton>
            <IconButton size="sm" color="red" variant="text">
              <i className="fa-brands fa-instagram text-lg" />
            </IconButton>
            <IconButton size="sm" color="blue" variant="text">
              <i className="fa-brands fa-facebook text-lg" />
            </IconButton>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
