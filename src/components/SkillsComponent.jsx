import { Icon } from "@iconify/react";
import { skillsObject } from "../libs/skills";

export const SkillsComponent = () => {

    return (
        <article className="my-4">
            <h2 className="h2">Mis Skills 🔥</h2>

            <div className="flex flex-wrap justify-center">
                    {
                        skillsObject.map( ({name, icon})=>{
                            return (
                                <div key={name} 
                                    className="
                                    flex
                                    items-center
                                    bg-white
                                    shadow-lg
                                    shadow-[#8c7851]/50 
                                    text-[#8c7851]
                                    font-bold
                                    rounded
                                    h-auto 
                                    w-48 
                                    p-3
                                    m-2 
                                ">
                                    <Icon className='mx-auto' icon={`logos:${icon}`} width="24" height="40"/>{name}
                                </div>
                            )
                        })
                    }
            </div>
        </article>
    )
}
