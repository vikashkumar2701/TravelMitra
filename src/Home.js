import {BrowserRouter as Router, Switch, Route, Link, Routes} from 'react-router-dom';
const Home = () =>{

return(

   
    <div class="flex items-center justify-center min-h-screen">
        <div class="flex flex-col">
            <span class="text-center font-bold font-medium leading-tight text-4xl mt-0 mb-2 text-blue-600my-10">
               <h1>TravelMitra</h1>
    
             
    
            
            </span>
    
            <div class="w-full max-w-md px-7 py-2 mx-auto">
              
                <div class="px-5 pt-3 bg-white shadow-lg rounded-2xl">
                    <div class="flex flex-row space-x-3">
                        
                        <div class="flex group">
                            <a href="#" class="p-3 text-gray-400 hover:text-yellow-500">
                                <span class="flex flex-col items-center">
                           
                                    <i class="mdi mdi-home-outline mdi-24px mx-1 text-gray-500 group-hover:text-gray-700
                                        transition-color duration-200"></i>
    
                               
                                    <span class="text-xs mb-2 transition-all duration-200">
                                        Home
                                    </span>
    
                                
                                    <span class="h-2 w-2 rounded-full group-hover:bg-yellow-500
                                        transition-all duration-150 delay-100"></span>
                                </span>
                            </a>
                        </div>
    
                   
                        <div class="flex group">
                        <Link to="/explore" className="p-3 text-gray-400 hover:text-yellow-500">
                           
                                <span class="flex flex-col items-center">
                              
                                    <i class="mdi mdi-compass-outline mdi-24px mx-1 text-gray-500 group-hover:text-gray-700
                                        transition-color duration-200"></i>
    
                          
                                    <span class="text-xs mb-2 transition-all duration-200">
                                     Explore
                                    
                                    </span>
    
                                    <span class="h-2 w-2 rounded-full group-hover:bg-yellow-500
                                        transition-all duration-150 delay-100"></span>
                                </span>
                                </Link>
                          
                        </div>
    
                      
                        <div class="flex group">
                        <Link to="/atm" className="p-3 text-gray-400 hover:text-yellow-500">
                           
                                <span class="flex flex-col items-center">
                                    <i class="mdi mdi-layers-outline mdi-24px mx-1 text-gray-700 group-hover:text-gray-700
                                        transition-color duration-200"></i>
    
                                 
                                    <span class="text-xs mb-2  duration-200">
                                        ATM Nearby
                                    </span>
    
                                   
                                    <span class="h-1 w-5 rounded-full group-hover:bg-yellow-500
                                        hover:h-3 hover:w-3 transition-all duration-150 delay-100"></span>
                                </span>

                            </Link>
                        </div>
    
                     
                        <div class="flex group">
                            <a href="#" class="p-3 text-gray-400 hover:text-yellow-500">
                                <span class="flex flex-col items-center">
                            
                                    <i class="mdi mdi-basket-plus-outline mdi-24px mx-1 text-gray-500 group-hover:text-gray-700
                                        transition-color duration-200"></i>
    
                             
                                    <span class="text-xs mb-2 transition-all duration-200">
                                        Cart
                                    </span>
    
                             
                                    <span class="h-2 w-2 rounded-full group-hover:bg-yellow-500
                                        transition-all duration-150 delay-100"></span>
                                </span>
                            </a>
                        </div>
    
          
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
    )

}

export default Home;