import {
  UserIcon,
  HeartIcon as HeartOutline,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";

function NavIcon() {
  return (
    <div className="flex gap-4">
      <HeartOutline className="h-6 w-6 text-primary" />
      <UserIcon className="h-6 w-6 text-primary" />
      <ShoppingBagIcon className="h-6 w-6 text-primary" />
    </div>
  );
}

export default NavIcon;
