$(document).ready(function() {
    // Definindo os horários já agendados (isso normalmente viria do backend)
    var scheduledEvents = [
        {
            title: 'Visita Agendada',
            start: '2024-06-05T10:00:00',
            end: '2024-06-05T11:00:00'
        },
        {
            title: 'Visita Agendada',
            start: '2024-06-07T14:00:00',
            end: '2024-06-07T15:00:00'
        }
    ];

    // Definindo os dias disponíveis
    var availableDays = [
        '2024-06-05',
        '2024-06-06',
        '2024-06-07'
    ];

    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        editable: true,
        events: scheduledEvents,
        dayRender: function(date, cell) {
            var dateString = date.format('YYYY-MM-DD');
            if (!availableDays.includes(dateString)) {
                cell.css('background-color', '#f2f2f2');
                cell.css('pointer-events', 'none');
                cell.css('opacity', '0.5');
            }
        },
        selectable: true,
        selectHelper: true,
        select: function(start, end) {
            var startDate = start.format('YYYY-MM-DD');
            var startTime = start.format('HH:mm');
            var endTime = end.format('HH:mm');

            if (!availableDays.includes(startDate)) {
                alert('Data não disponível para agendamento.');
                $('#calendar').fullCalendar('unselect');
                return;
            }

            var isConflict = scheduledEvents.some(function(event) {
                return event.start.isSame(start) || event.end.isSame(end) || (event.start.isBefore(end) && event.end.isAfter(start));
            });

            if (isConflict) {
                alert('Horário já agendado.');
                $('#calendar').fullCalendar('unselect');
                return;
            }

            var title = prompt('Digite o título da visita:');
            if (title) {
                var newEvent = {
                    title: title,
                    start: start,
                    end: end
                };
                scheduledEvents.push(newEvent);
                $('#calendar').fullCalendar('renderEvent', newEvent, true);
                $('#calendar').fullCalendar('unselect');
            }
        }
    });
});
