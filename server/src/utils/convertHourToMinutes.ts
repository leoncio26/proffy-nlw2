export default function convertHourToMinutes(time: string){
  const [hours, minutes] = time.split(':').map(Number);//separa a string e converte para número
  const timeInMinutes = (hours * 60) + minutes;

  return timeInMinutes;
}