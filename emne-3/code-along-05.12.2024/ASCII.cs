namespace code_along_05._12._2024;

internal static class ASCII
{
    internal static string Title { get; private set; } = @"
▗▄▄▄▖ ▗▄▄▖ ▗▄▄▖ ▗▄▖ ▗▄▄▖ ▗▄▄▄▖ 
▐▌   ▐▌   ▐▌   ▐▌ ▐▌▐▌ ▐▌▐▌    
▐▛▀▀▘ ▝▀▚▖▐▌   ▐▛▀▜▌▐▛▀▘ ▐▛▀▀▘ 
▐▙▄▄▖▗▄▄▞▘▝▚▄▄▖▐▌ ▐▌▐▌   ▐▙▄▄▖ 
                               
    ▗▄▄▄▖▗▄▄▖  ▗▄▖ ▗▖  ▗▖      
    ▐▌   ▐▌ ▐▌▐▌ ▐▌▐▛▚▞▜▌      
    ▐▛▀▀▘▐▛▀▚▖▐▌ ▐▌▐▌  ▐▌      
    ▐▌   ▐▌ ▐▌▝▚▄▞▘▐▌  ▐▌      
                               
▗▄▄▄▖▗▄▄▄▖▗▖  ▗▖▗▄▄▄ ▗▖ ▗▖ ▗▄▄▖
▐▌     █  ▐▛▚▖▐▌▐▌  █▐▌ ▐▌▐▌   
▐▛▀▀▘  █  ▐▌ ▝▜▌▐▌  █▐▌ ▐▌ ▝▀▚▖
▐▌   ▗▄█▄▖▐▌  ▐▌▐▙▄▄▀▝▚▄▞▘▗▄▄▞▘
                               
 Use [UP] / [DOWN] to navigate 
       Press [Q] to exit.      
-------------------------------
";
    internal static string MenuOption1 { get; private set; } = @"       [1] Make a horse        ";
    internal static string MenuOption2 { get; private set; } = @"       [2] Start a race        ";
    internal static string InvalidInput { get; private set; } = @"        INVALID INPUT!         ";
}
