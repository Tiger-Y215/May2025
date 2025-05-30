export default function ClientPage(){
  return(
      <>
      <div>For my wireframe</div>
      <div className="flex flex-wrap justify-center">
          <div className=" flex border-1 border-blue-500 border-rounded">
              <img className="w-20 h-21" src="https://images.unsplash.com/photo-1659355894117-0ae6f8f28d0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Lawyer" />
            <div className="flex flex-col">
            <div className="font-bold justify-center">Blake and Knee's</div>
              <div className="p-1">contact us at: 111 111 1111</div>
            </div>
            { /* add buttons */}
          </div>
      </div>
      <div className="flex flex-wrap p-5">
        <div className="flex border-1 border-blue-500 border-rounded">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, perferendis voluptate. Commodi provident in eos, numquam quisquam dolor excepturi voluptates minus tempore sapiente ipsam repellendus. Veritatis nulla eaque voluptatibus natus.</p>
            <img className="w-20 h-21" src="https://images.unsplash.com/photo-1644904105846-095e45fca990?q=80&w=1892&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="headshot" />
        </div>
      </div>
      {/* make separate component like w/ ToDoList that allows user to interact later */}
      <div className="flex flex-wrap p-5">
        <div className="flex border-1 border-blue-500 border-rounded">
            <div className="flex flex-col">
                <div>Contact Us Today</div>
            </div>
        </div>
      </div>
      </>
  );
};