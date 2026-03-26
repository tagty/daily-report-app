class ReportsController < ApplicationController
  def index
    reports = Report.order(date: :desc)
    render json: reports
  end

  def create
    report = Report.new(report_params)
    if report.save
      render json: report, status: :created
    else
      render json: { errors: report.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def report_params
    params.expect(report: [:date, :body])
  end
end
