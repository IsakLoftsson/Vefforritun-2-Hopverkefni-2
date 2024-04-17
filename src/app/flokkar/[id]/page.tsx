import { getTypeByID } from "@/lib/api";


export default async function Flokkar({ params }: { params: { id: string } }) {
    const flokkur = getTypeByID(params.id);
  
    if (!flokkur) {
      
      return <p>Faild</p>
    }
  
  
    return (
        <div>
            <p>name: {(await flokkur).name}</p>
        </div>
    );
  }