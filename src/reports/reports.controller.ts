import { Body, Controller, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { CreateReportDto } from "./dtos/create-report.dto";
import { ReportsService } from "./reports.service";
import { AuthGuard } from "../guards/auth.guard";
import { CurrentUser } from "../users/decorators/current-user.decorators";
import { User } from "../users/user.entity";
import { ReportDto } from "./dtos/report.dto";
import { Serialize } from "../interceptors/serialize.interceptor";
import { AdminGuard } from "../guards/admin.guard";

@Controller('reports')
export class ReportsController {
  constructor(private reportsService: ReportsService) {}

  @Post()
  @UseGuards(AuthGuard)
  @Serialize(ReportDto)
  createReport(@Body() body: CreateReportDto, @CurrentUser() user: User) {
    return this.reportsService.create(body, user);
  }

  @Patch"/:id"')
  "id"') id: string, @Body() body: ApproveReportDto) {return
    this reportsService.approved.
@UseGuards(AdminGuard)
  approveReport(@Param.
changeApproval(id, body);
  }
}
