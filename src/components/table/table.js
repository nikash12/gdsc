import './table.css'
import Middle from '../middle/middle'

export default function Table(){
    return(
        <div className='table'>
            


<div className="relative overflow-x-auto ">
    <h1 className="text-white tt">View Your Upcoming Events Here</h1>
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Event name
                </th>
                <th scope="col" class="px-6 py-3">
                    Date
                </th>
                <th scope="col" class="px-6 py-3">
                    time
                </th>
                <th scope="col" class="px-6 py-3">
                    duration
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Running
                </th>
                <td class="px-6 py-4">
                    26-10-2023
                </td>
                <td class="px-6 py-4">
                    8 AM
                </td>
                <td class="px-6 py-4">
                    1hr
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Coding classes                </th>
                <td class="px-6 py-4">
                    26-10-2023
                </td>
                <td class="px-6 py-4">
                    8 PM
                </td>
                <td class="px-6 py-4">
                    2hrs
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Swimming
                </th>
                <td class="px-6 py-4">
                    29-10-2023
                </td>
                <td class="px-6 py-4">
                    10 AM
                </td>
                <td class="px-6 py-4">
                    45min
                </td>
            </tr>
        </tbody>
    </table>
</div>

        </div>
    )
}