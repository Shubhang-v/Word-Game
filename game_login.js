function Login()
{
    player1name = document.getElementById("player1inp").value ;
    player2name = document.getElementById("player2inp").value ;

    localStorage.setItem("Player1Name",player1name);
    localStorage.setItem("Player2Name",player2name);
    
    window.location = "game_page.html";
}