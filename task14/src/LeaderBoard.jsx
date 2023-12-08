import React, { useState } from "react"
const Top  = ()=> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
</svg>
const Down  = ()=> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>

const Leaderboard = ()=>
{
    const [teamData,setTeamData] = useState({
       
    })
    const [teams,setTeams] = useState(
        [

        ]
    ) 
    const  valueHandler = (e)=>{
        const key = e.target.name;
        setTeamData({...teamData, [key]: e.target.value  })

    } 
    const  submitTeam = (e)=>{
        e.preventDefault();
        setTeams([...teams,teamData ])
    }
    const SORT_TYPE = {
        teamScore: {
            ASC:"teamScore_ASC",
            DESC:"teamScore_DESC",
        },
        teamName: {
            ASC:"teamName_ASC",
            DESC:"teamName_DESC",
        }
    }
    const [sortingType,setSortingType] = useState(SORT_TYPE.teamScore.ASC); 
    return <>
    <form onSubmit={submitTeam} className="p-3">
           <div className="my-1">
           <label htmlFor="teamId">Team ID </label>
            <input id="teamId" name="teamId" type="number"  onChange={valueHandler} className="border-blue-200 border-[2px]" min={0}  /> 
           </div>
           <div className="my-1">
           <label htmlFor="teamName">Team Name </label>
            <input id="teamName" name="teamName"  onChange={valueHandler}  className="border-blue-200 border-[2px]"  /> 
           </div>
           <div className="my-1">
           <label htmlFor="teamScore">Team Score </label>
            <input id="teamScore" type="number" name="teamScore" onChange={valueHandler}  className="border-blue-200 border-[2px]"   /> 
           </div>
           <button type="submit">Submit</button>
    </form>
    {
        JSON.stringify(teamData)
    }
    <table className="table " >
        <thead>
            <tr>
                <th>
                    #
                </th>
                <th>
                    id
                </th>
                <th className=""
                onClick={()=>{
                    sortingType=== SORT_TYPE.teamName.ASC  ? setSortingType(SORT_TYPE.teamName.DESC): setSortingType (SORT_TYPE.teamName.ASC)
                }}
                >
                    name {
                        sortingType=== SORT_TYPE.teamName.ASC  ? <Top/> : <Down/>
                    }

                </th>
                <th className="flex"
                onClick={()=>{
                    sortingType=== SORT_TYPE.teamScore.ASC  ? setSortingType(SORT_TYPE.teamScore.DESC): setSortingType (SORT_TYPE.teamScore.ASC)
                }}
                >
                    score {
                        sortingType=== SORT_TYPE.teamScore.ASC  ? <Top/> : <Down/>
                    }

                </th>
                
                
            </tr>
        </thead>
        <tbody>
        { teams.sort((aTeam,bTeam)=> {
        
          if(sortingType=== SORT_TYPE.teamScore.ASC)
            {
                return aTeam.teamScore - bTeam.teamScore;
            }
            else if(sortingType=== SORT_TYPE.teamScore.DESC)
            {
                return bTeam.teamScore - aTeam.teamScore;
            }
            else if(sortingType=== SORT_TYPE.teamName.ASC)
            {
            
                return bTeam.teamName.localeCompare(aTeam.teamName) ;
            }
            else if(sortingType=== SORT_TYPE.teamName.DESC)
            {
            
                return aTeam.teamName.localeCompare(bTeam.teamName) ;
            }
            
            }) .map((teamItem,index)=> <tr key={index}>
            <td>
                {index+1}
            </td>
            <td>
                {teamItem.teamId}
            </td>
            <td>
                {teamItem.teamName}
            </td>
            <td>
                {teamItem.teamScore}
            </td>
            </tr>)}
        </tbody>
    </table>
       
        </>
}
export default Leaderboard