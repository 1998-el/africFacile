import { ServiceList } from "./ServiceList";
export const ServicesSection = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="flex-1">
        <h3 className="text-xl font-semibold mb-4 text-blue-600">Services Présentiels</h3>
        <ServiceList type="in-person" limit={4} services={[]} />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold mb-4 text-blue-600">Services à Distance</h3>
        <ServiceList type="remote" limit={4} services={[]} />
      </div>
    </div>
  );
};