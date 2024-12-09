namespace code_along_05._12._2024;

internal static class ASCII
{
    internal static string Title { get; private set; } = @"▗▄▄▄▖ ▗▄▄▖ ▗▄▄▖ ▗▄▖ ▗▄▄▖ ▗▄▄▄▖ 
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
-------------------------------";

    internal static string MenuOption1 { get; private set; } = @"      [1] See your horses      ";
    internal static string MenuOption2 { get; private set; } = @"      [2] Make a horse         ";
    internal static string MenuOption3 { get; private set; } = @"      [3] Start a race         ";

    internal static string YourHorses { get; private set; } = @"===--->>- YOUR HORSES -<<---===";
    internal static string HorseCreator { get; private set; } = @"===--->> HORSE CREATOR <<---===";
    internal static string RaceMaker { get; private set; } = @"///////// RACE MAKER \\\\\\\\\\";
    internal static string RaceOngoing { get; private set; } = @"+++++++ RACE IS ONGOING +++++++";
    internal static string SelectHorse { get; private set; } = @"==---> Select your horse <---==";

    internal static string Divider { get; private set; } = @"-------------------------------";

    internal static string MenuGoBack { get; private set; } = @"   PRESS ANY KEY TO GO BACK    ";
    internal static string InvalidInput { get; private set; } = @"        INVALID INPUT!         ";
    internal static string YouHaveNoHorses { get; private set; } = @"[!] YOU HAVE NO HORSES YET [!]";
}
