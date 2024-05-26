"use client"
import { useRouter } from "next/navigation";

// export const metadata = {
//   title: "Acerca de nosotros - Tiago",
// }

export default function AboutPage() {
  const router = useRouter();

  return (
    <section>
      <h1>About</h1>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus distinctio architecto tempora aliquam? Repudiandae laboriosam quibusdam nemo! Quidem eaque nostrum minus obcaecati neque consequuntur id rem ducimus qui, perferendis deserunt labore officiis itaque sint excepturi similique ipsa, assumenda doloribus nemo amet sapiente voluptates dolor velit iste. Reprehenderit eius dolorum aspernatur harum! Accusamus deserunt facilis a quis recusandae possimus quidem sunt? Inventore consectetur porro nesciunt! Laboriosam doloribus amet suscipit laborum quod esse sequi animi eligendi non voluptates dignissimos incidunt quos debitis cumque consequuntur, architecto neque. Deserunt sequi quisquam doloribus expedita, nesciunt nihil aut veritatis debitis earum minus distinctio, optio facere laborum.</p>

      <button 
      className="bg-sky-400 px-3 py-2 rounded-md"
        onClick={() => {
          alert("Executing code!!!")
          router.push("/")
        }}
      >
        Click
      </button>

    </section>

  )

}