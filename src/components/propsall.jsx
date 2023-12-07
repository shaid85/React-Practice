const PropsAll = ({username,job,details = "Rapidly build modern websites "}) => {
    return (
        <>
<figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 w-8/12 mt-8 mx-auto ">
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/15703290/pexels-photo-15703290/free-photo-of-a-plate-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width="384" height="512"/>
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg font-medium dark:text-white">
        “{details}”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        {username}
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        {job}
      </div>
    </figcaption>
  </div>
</figure>
        </>
        ) 
    }
export default PropsAll
