import HomePage from './home/HomePage'
import RobotBuilder from "./build/RobotBuilder.vue"
import PartInfo from "./parts/PartInfo"
import Proba from "./new/proba"
import BrowserParts from "./new/BrowserParts"
import BrowserHeads from "@/new/BrowserHeads";
import BrowserArms from "@/new/BrowserArms";
import BrowserTorsos from "@/new/BrowserTorsos";
import BrowserBases from "@/new/BrowserBases";
import SidebarStandard from "@/Sidebars/SidebarStandard";
import SidebarBuild from "@/Sidebars/SidebarBuild";
import ShoppingCart from "@/cart/ShoppingCart";

const routes = [
  {path: '/',name: 'Home', components: {
    default: HomePage,
      sidebar: SidebarStandard,
    },},
  {path: '/build', name:'Build', components: {
      default: RobotBuilder,
      sidebar: SidebarBuild,
    },},
  { path: "/proba/browse", name: 'BrowseParts', component: BrowserParts,
    children: [
      {name: 'BrowserHeads', path: '/heads', component: BrowserHeads},
      {name: 'BrowserArms', path: '/arms', component: BrowserArms},
      {name: 'BrowserTorsos', path: '/torsos', component: BrowserTorsos},
      {name: 'BrowserBases', path: '/bases', component: BrowserBases},
    ]},
  {path: '/parts', name: 'Parts', comment: PartInfo},
  {path: '/proba/:partType/:id', name: 'Proba', component: Proba, props: true},
  {path: '/cart', name: 'Cart', component: ShoppingCart},
];
export default routes;
