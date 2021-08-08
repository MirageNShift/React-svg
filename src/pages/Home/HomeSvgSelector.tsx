interface Props {
  id: string;
}

export const HomeSvgSelector = ({ id }: Props) => {
  switch (id) {
    case 'svg':
      return (
        <svg viewBox="-2 0 511 512" xmlns="http://www.w3.org/2000/svg">
          <path d="m85.5 60c0-11.027344 8.972656-20 20-20h174.890625v71.109375c0 33.085937 26.914063 60 60 60h71v118.890625h40v-147.144531l-142.132813-142.855469h-203.757812c-33.085938 0-60 26.914062-60 60v230h40zm234.890625 51.109375v-43.207031l62.886719 63.207031h-42.886719c-11.03125 0-20-8.96875-20-20zm186.109375 289.890625v20c0 50.054688-40.707031 90.800781-90.816406 91h-.367188c-50.109375-.199219-90.816406-40.945312-90.816406-91 0-50.179688 40.800781-91 90.945312-91 12.867188 0 25.320313 2.644531 37.007813 7.859375l-16.296875 36.527344c-6.527344-2.910157-13.496094-4.386719-20.710938-4.386719-28.089843 0-50.945312 22.878906-50.945312 51 0 28.058594 22.863281 50.898438 51 51 21.023438-.074219 39.101562-12.847656 46.898438-31h-42.898438v-40zm-361 55.5c0 30.601562-24.898438 55.5-55.5 55.5h-89.5v-40h89.5c8.546875 0 15.5-6.953125 15.5-15.5s-6.953125-15.5-15.5-15.5h-34c-30.601562 0-55.5-24.898438-55.5-55.5s24.898438-55.5 55.5-55.5h68.5v40h-68.5c-8.546875 0-15.5 6.953125-15.5 15.5s6.953125 15.5 15.5 15.5h34c30.601562 0 55.5 24.898438 55.5 55.5zm125.621094-126.5h42.316406l-62.792969 182h-30.445312l-63.699219-182h42.378906l36.382813 103.949219zm0 0" />
        </svg>
      );
    default:
      return <svg></svg>;
  }
};
