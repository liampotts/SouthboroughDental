import servicesContent from '../data/servicesContent.json';

const services = servicesContent.map((service) => ({
  ...service,
}));

export const getAllServices = () => services;

export const getServiceBySlug = (slug) =>
  services.find((service) => service.slug === slug);

export const getServicePreview = (service) => {
  if (!service) {
    return '';
  }
  const firstSection = service.sections?.[0];
  if (!firstSection) {
    return '';
  }
  const firstParagraph = firstSection.body?.find((block) => block.type === 'paragraph');
  return firstParagraph?.text || '';
};

export const getServicesMenu = () =>
  services
    .map(({ slug, title }) => ({ slug, title }))
    .sort((a, b) => a.title.localeCompare(b.title));
