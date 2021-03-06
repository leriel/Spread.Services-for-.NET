﻿using System;
using System.Collections.Generic;
using System.Text;

namespace GrapeCity.Documents.Spread.Examples.Features.Formatting.Fill
{
    public class LinearGradientFill : ExampleBase
    {
        public override void Execute(GrapeCity.Documents.Spread.Workbook workbook)
        {
            IWorksheet worksheet = workbook.Worksheets[0];
            worksheet.Range["A1"].Interior.Pattern = GrapeCity.Documents.Spread.Pattern.LinearGradient;
            (worksheet.Range["A1"].Interior.Gradient as ILinearGradient).ColorStops[0].Color = Color.Red;
            (worksheet.Range["A1"].Interior.Gradient as ILinearGradient).ColorStops[1].Color = Color.Yellow;

            (worksheet.Range["A1"].Interior.Gradient as ILinearGradient).Degree = 90;
        }

        public override bool ShowViewer
        {
            get
            {
                return false;
            }
        }
    }
}
