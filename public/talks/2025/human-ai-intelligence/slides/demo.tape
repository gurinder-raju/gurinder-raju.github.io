# Record the README GIF with charmbracelet/vhs:  brew install vhs && vhs demo.tape
Output demo.gif

Set Shell "bash"
Set FontSize 18
Set Width 1280
Set Height 720
Set Padding 0
Set WindowBar ""
# Matches kanagawa.yaml; remove if your vhs build lacks this theme.
Set Theme "Kanagawa"

Hide
Type "presenterm slides.md" Enter
Sleep 1.5s
Show

Sleep 2.5s
Type "l" Sleep 1.5s
Type "l" Sleep 1.5s
Type "l" Sleep 1.5s
Type "l" Sleep 2s
Type "G" Sleep 1s
Type "h" Sleep 2.5s
