$ErrorActionPreference = "Stop"

# Create directories if they don't exist
$logosDir = "public/images/partners"
if (-not (Test-Path -Path $logosDir)) {
    New-Item -ItemType Directory -Path $logosDir -Force | Out-Null
}

# List of logos to download with their URLs
$logos = @{
    "aws" = "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
    "microsoft" = "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg"
    "createRobot" = "https://createrobotics.com/wp-content/uploads/2022/03/logo-createrobotics-1.svg"
    "acebott" = "https://acebott.com/wp-content/uploads/2022/04/acebott-logo.svg"
    "WEEeMAKE" = "https://www.weemake.com.tw/wp-content/uploads/2021/06/weemake-logo.svg"
}

# Download each logo
foreach ($logo in $logos.GetEnumerator()) {
    $name = $logo.Key
    $url = $logo.Value
    $output = "$logosDir/$name.png"
    
    Write-Host "Downloading $name..."
    try {
        # First download the SVG
        $svgPath = "$logosDir/$name.svg"
        Invoke-WebRequest -Uri $url -OutFile $svgPath
        
        # Convert SVG to PNG with transparent background using Inkscape
        if (Get-Command "inkscape" -ErrorAction SilentlyContinue) {
            & inkscape --export-type="png" --export-filename="$output" --export-background-opacity=0 --export-width=200 "$svgPath"
            Write-Host "Converted $name to PNG with transparent background"
        } else {
            Write-Warning "Inkscape not found. Please install Inkscape to convert SVGs to PNG with transparent background."
            Write-Host "SVG saved to: $svgPath"
        }
    }
    catch {
        Write-Error "Failed to download or convert $name : $_"
    }
}

Write-Host "All logos have been downloaded to $logosDir"
